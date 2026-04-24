
import express from "express";
import { createServer as createViteServer } from "vite";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import dotenv from "dotenv";
import cors from "cors";
import { Resend } from "resend";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY || "re_Yb66eeKq_3X7ct1z8YA6Uy6e1KVrJDsGd");

// Firebase Configuration (Server-side)
// Using hardcoded values to match client-side firebase.ts and ensure availability
const firebaseConfig = {
  apiKey: "AIzaSyAerlaB_Lb05q9gqErAjNxOemiijuhO3f0",
  authDomain: "iexplainwebsite.firebaseapp.com",
  projectId: "iexplainwebsite",
  storageBucket: "iexplainwebsite.appspot.com",
  messagingSenderId: "438305327858",
  appId: "1:438305327858:web:18713e75400a609c25de6b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEFAULT_SEO = {
  title: "iExplain Education | Global Admissions",
  description: "iExplain Education helps students with admissions, counselling, and study abroad planning for top global universities.",
  canonicalUrl: "https://iexplain.education/",
  ogTitle: "iExplain Education | Global Admissions",
  ogDescription: "Admissions guidance, counseling, and global education pathways for students.",
  ogUrl: "https://iexplain.education/",
  jsonLd: ""
};

const escapeHtml = (value = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const resolveSlugFromPath = (pathname: string) => {
  const cleanPath = pathname.split("?")[0].replace(/^\/+|\/+$/g, "");
  if (!cleanPath) return "";

  if (cleanPath.startsWith("exams/")) {
    return cleanPath.replace("exams/", "");
  }

  if (cleanPath.startsWith("entrance-exams/")) {
    return cleanPath.replace("entrance-exams/", "");
  }

  if (cleanPath.startsWith("blog") || cleanPath.startsWith("admin") || cleanPath.startsWith("api")) {
    return "";
  }

  const segments = cleanPath.split("/");
  return segments[segments.length - 1] || "";
};

const buildSeoFromPayload = (seoPayload: any, pathname: string, pageTitle?: string) => {
  const seoTitle = seoPayload?.metaTitle || seoPayload?.seoTitle || pageTitle || DEFAULT_SEO.title;
  const seoDescription = seoPayload?.metaDescription || DEFAULT_SEO.description;
  const canonicalPath = seoPayload?.slug ? `/${seoPayload.slug}` : pathname;
  const canonicalUrl = `https://iexplain.education${canonicalPath}`;
  const jsonLd = seoPayload?.structuredData ? JSON.stringify(seoPayload.structuredData) : "";

  return {
    title: seoTitle,
    description: seoDescription,
    canonicalUrl,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
    ogUrl: canonicalUrl,
    jsonLd,
  };
};

const resolveSeoForRequest = async (pathname: string) => {
  const slug = resolveSlugFromPath(pathname);
  if (!slug) return DEFAULT_SEO;

  try {
    const dynamicSnapshot = await getDocs(query(collection(db, "dynamic_pages"), where("slug", "==", slug)));
    if (!dynamicSnapshot.empty) {
      const data = dynamicSnapshot.docs[0].data();
      const seoPayload = data?.payload?.seo || data?.seo || {};
      return buildSeoFromPayload(seoPayload, pathname, data?.title);
    }

    const collegeSnapshot = await getDocs(query(collection(db, "colleges"), where("slug", "==", slug)));
    if (!collegeSnapshot.empty) {
      const data = collegeSnapshot.docs[0].data();
      return buildSeoFromPayload(data?.seo || {}, pathname, data?.name);
    }
  } catch (error) {
    console.error("SEO resolution failed for path:", pathname, error);
  }

  return DEFAULT_SEO;
};

const injectSeoIntoHtml = (html: string, seo: typeof DEFAULT_SEO) => {
  const titleTag = `<title>${escapeHtml(seo.title)}</title>`;
  const descriptionTag = `<meta name="description" content="${escapeHtml(seo.description)}">`;
  const canonicalTag = `<link rel="canonical" href="${escapeHtml(seo.canonicalUrl)}">`;
  const ogTitleTag = `<meta property="og:title" content="${escapeHtml(seo.ogTitle)}">`;
  const ogDescriptionTag = `<meta property="og:description" content="${escapeHtml(seo.ogDescription)}">`;
  const ogUrlTag = `<meta property="og:url" content="${escapeHtml(seo.ogUrl)}">`;

  const jsonLdScript = seo.jsonLd
    ? `<script type="application/ld+json" id="server-jsonld-schema">${seo.jsonLd}</script>`
    : "";

  return html
    .replace(/<title>[\s\S]*?<\/title>/i, titleTag)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, descriptionTag)
    .replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, canonicalTag)
    .replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, ogTitleTag)
    .replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, ogDescriptionTag)
    .replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, ogUrlTag)
    .replace("</head>", `${jsonLdScript}</head>`);
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());
  app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    next();
  });

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, city, course, targetCountry, category, source } = req.body;

      // Construct email content
      const htmlContent = `
        <h2>New Lead from ${source || 'Website Contact Form'}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${city ? `<p><strong>City:</strong> ${city}</p>` : ''}
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Target Country:</strong> ${targetCountry}</p>
      `;

      // Send email via Resend
      const { data, error } = await resend.emails.send({
        from: 'iExplain Education <onboarding@resend.dev>', // Use verified domain in production
        to: ['iexplaineducation.online@gmail.com'], // Send to the user's email
        subject: `New Lead: ${name} - ${category}`,
        html: htmlContent,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }

      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Media Asset Route
  app.get("/assets/:filename", async (req, res) => {
    try {
      const filename = req.params.filename;
      // Query Firestore for the media document with this filename
      // Note: We need to query by 'url' or 'name'. 
      // Since we are constructing the URL as /assets/filename, we can query by that.
      // Or better, query by the 'name' field if we ensure it matches the filename in URL.
      
      // However, Firestore query requires importing 'query', 'where', 'getDocs', 'collection'
      // We need to import these at the top level.
      // But wait, server.ts already imports getFirestore, doc, getDoc.
      // We need to add collection, query, where, getDocs to imports.
      
      // Let's use a simple scan if we can't easily add imports, OR update imports.
      // Updating imports is better.
      
      // For now, let's assume we can query.
      // Actually, to avoid complex queries without proper indexes, 
      // let's try to find the document.
      
      // Since we don't have the ID, we must query.
      const mediaRef = collection(db, "media");
      // Query by 'name' field which stores the unique filename
      const q = query(mediaRef, where("name", "==", filename));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // Fallback: try querying by 'fileURL' field for backward compatibility
        const q2 = query(mediaRef, where("fileURL", "==", `/assets/${filename}`));
        const querySnapshot2 = await getDocs(q2);
        
        if (querySnapshot2.empty) {
             console.log(`File not found: ${filename}`);
             return res.status(404).send("File not found");
        }
        
        const docData = querySnapshot2.docs[0].data();
        return serveBase64(res, docData.data);
      }

      const docData = querySnapshot.docs[0].data();
      serveBase64(res, docData.data);

    } catch (error) {
      console.error("Error serving asset:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  function serveBase64(res: any, base64Data: string) {
      if (!base64Data || !base64Data.includes(';base64,')) {
        return res.status(500).send("Invalid file data");
      }

      try {
        // More robust parsing using split instead of regex
        const [header, base64] = base64Data.split(';base64,');
        const type = header.split(':')[1];
        const buffer = Buffer.from(base64, 'base64');

        res.setHeader('Content-Type', type);
        res.setHeader('Cache-Control', 'public, max-age=2592000, immutable'); // Cache for 30 days
        res.send(buffer);
      } catch (error) {
        console.error("Error decoding base64:", error);
        res.status(500).send("Error processing image");
      }
  }

  // Sitemap Route
  app.get("/sitemap.xml", async (req, res) => {
    try {
      const docRef = doc(db, "settings", "sitemap");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        res.header("Content-Type", "application/xml");
        res.setHeader("Cache-Control", "public, max-age=43200");
        res.send(data.content);
      } else {
        // Default sitemap if none exists
        const staticUrls = [
          "/",
          "/about",
          "/services",
          "/blog",
          "/contact",
          "/privacy-policy",
          "/terms-conditions",
        ];
        const currentIso = new Date().toISOString();
        const defaultSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls.map((path) => `  <url>
    <loc>https://iexplain.education${path}</loc>
    <lastmod>${currentIso}</lastmod>
    <changefreq>${path === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${path === "/" ? "1.0" : "0.8"}</priority>
  </url>`).join('\n')}
</urlset>`;
        res.header("Content-Type", "application/xml");
        res.setHeader("Cache-Control", "public, max-age=43200");
        res.send(defaultSitemap);
      }
    } catch (error) {
      console.error("Error fetching sitemap:", error);
      res.status(500).send("Error generating sitemap");
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);

    app.get("*", async (req, res) => {
      try {
        const requestUrl = req.originalUrl || req.url;
        const templatePath = path.resolve(__dirname, "index.html");
        const rawTemplate = await fs.readFile(templatePath, "utf-8");
        const transformed = await vite.transformIndexHtml(requestUrl, rawTemplate);
        const seo = await resolveSeoForRequest(req.path);
        const html = injectSeoIntoHtml(transformed, seo);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (error) {
        vite.ssrFixStacktrace(error as Error);
        console.error(error);
        res.status(500).end("Internal Server Error");
      }
    });
  } else {
    // Production static file serving (if built)
    app.use(express.static("dist", {
      index: false,
      etag: true,
      maxAge: "1y",
      setHeaders: (res, filePath) => {
        if (filePath.endsWith(".html")) {
          res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
        } else {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        }
      }
    }));
    
    // SPA Fallback for production with per-page SEO injection
    app.get("*", async (req, res) => {
      try {
        const templatePath = path.resolve(__dirname, "dist/index.html");
        const template = await fs.readFile(templatePath, "utf-8");
        const seo = await resolveSeoForRequest(req.path);
        const html = injectSeoIntoHtml(template, seo);
        res.status(200).set({ "Content-Type": "text/html" }).send(html);
      } catch (error) {
        console.error("Failed to render HTML with SEO:", error);
        res.status(500).send("Internal Server Error");
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
