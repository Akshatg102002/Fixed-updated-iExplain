import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  BLOG_POSTS,
  COLLEGE_DETAILS as LEGACY_COLLEGE_DETAILS,
  INDIA_COURSES_DETAILED,
  MBBS_ABROAD_DETAILED,
  OFFICE_ADDRESSES,
  STUDENT_SERVICES_DATA,
  STUDY_ABROAD_DETAILED,
} from '../data.ts';
import { COLLEGE_DETAILS as STRUCTURED_COLLEGE_DETAILS } from '../collegeData.ts';
import { ENTRANCE_EXAM_DETAILS } from '../EntranceExamdata.ts';
import { MBBS_IN_INDIA_DETAILS } from '../MBBSinindiadata.ts';
import { STUDY_ABROAD_COLLEGE_DETAILS } from '../studyAbroadCollegeData.ts';
import { createSlug } from '../utils.ts';

type ManualRoute = {
  path: string;
  priority?: string;
  include?: boolean;
};

type ManualSeoConfig = {
  siteUrl?: string;
  routes?: ManualRoute[];
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const appFile = path.join(repoRoot, 'App.tsx');
const publicDir = path.join(repoRoot, 'public');
const manualRoutesFile = path.join(repoRoot, 'seo', 'manual-routes.json');
const defaultSiteUrl = 'https://www.iexplaineducation.in';

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const normalizePath = (value: string): string => {
  const trimmed = value.trim();
  if (!trimmed || trimmed === '/') return '/';
  return `/${trimmed.replace(/^\/+/, '').replace(/\/+$/, '')}`;
};

const getPriority = (route: string): string | null => {
  if (route === '/') return '1.0';
  if (route === '/contact' || route === '/services' || route === '/blog') return '0.9';
  if (route.startsWith('/blog/')) return '0.8';
  if (route.split('/').filter(Boolean).length >= 2) return '0.7';
  return '0.8';
};

const expandDynamicRoute = (routePattern: string): string[] => {
  switch (routePattern) {
    case '/service-detail/:id':
      return STUDENT_SERVICES_DATA.map((service) => `/service-detail/${service.id}`);

    case '/blog/:category/:slug':
      return BLOG_POSTS.map((post) => `/blog/${createSlug(post.category || 'general')}/${createSlug(post.title)}`);

    case '/blog/:slug':
      return BLOG_POSTS.map((post) => `/blog/${createSlug(post.title)}`);

    case '/study-india/:subPath':
      return Object.keys(INDIA_COURSES_DETAILED).map((subPath) => `/study-india/${subPath}`);

    case '/mbbs-india/:titleSlug':
      return Object.keys(MBBS_IN_INDIA_DETAILS).map((slug) => `/mbbs-india/${slug}`);

    case '/:titleSlug': {
      const slugs = new Set<string>([
        ...Object.keys(STRUCTURED_COLLEGE_DETAILS),
        ...Object.keys(LEGACY_COLLEGE_DETAILS),
        ...Object.keys(STUDY_ABROAD_COLLEGE_DETAILS),
        ...Object.values(MBBS_ABROAD_DETAILED).map((item) => createSlug(item.title)),
        ...Object.values(STUDY_ABROAD_DETAILED).map((item) => createSlug(item.title)),
      ]);

      return [...slugs]
        .filter(Boolean)
        .filter((slug) => slug !== 'admin' && slug !== '404')
        .map((slug) => `/${slug}`);
    }

    case '/mbbs-abroad/:subPath':
      return Object.keys(MBBS_ABROAD_DETAILED).map((subPath) => `/mbbs-abroad/${subPath}`);

    case '/exams/:subPath':
      return Object.keys(ENTRANCE_EXAM_DETAILS).map((subPath) => `/exams/${subPath}`);

    case '/entrance-exams/:subPath':
      return Object.keys(ENTRANCE_EXAM_DETAILS).map((subPath) => `/entrance-exams/${subPath}`);

    case '/office/:slug':
      return OFFICE_ADDRESSES.map((office) => `/office/${office.slug}`);

    case '/college/:slug':
      return Object.keys(LEGACY_COLLEGE_DETAILS).map((slug) => `/college/${slug}`);

    default:
      return [];
  }
};

const loadManualSeoConfig = async (): Promise<ManualSeoConfig> => {
  try {
    const manualConfigSource = await readFile(manualRoutesFile, 'utf8');
    return JSON.parse(manualConfigSource) as ManualSeoConfig;
  } catch {
    return {};
  }
};

const generate = async () => {
  const appSource = await readFile(appFile, 'utf8');
  const routeMatches = [...appSource.matchAll(/<Route\s+path="([^"]+)"/g)].map((match) => match[1]);
  const manualConfig = await loadManualSeoConfig();
  const siteUrl = process.env.SITE_URL || manualConfig.siteUrl || defaultSiteUrl;

  const discoveredRoutes = new Set<string>();
  const manualPriorities = new Map<string, string>();

  for (const route of routeMatches) {
    if (route === '*' || route === '/admin' || route === '/404') {
      continue;
    }

    if (route.includes(':')) {
      for (const expanded of expandDynamicRoute(route)) {
        discoveredRoutes.add(expanded);
      }
    } else {
      discoveredRoutes.add(route);
    }
  }

  for (const manualRoute of manualConfig.routes || []) {
    if (!manualRoute.path || manualRoute.include === false) {
      continue;
    }

    const normalized = normalizePath(manualRoute.path);
    discoveredRoutes.add(normalized);

    if (manualRoute.priority) {
      manualPriorities.set(normalized, manualRoute.priority);
    }
  }

  const sortedRoutes = [...discoveredRoutes].sort();
  const lastModified = new Date().toISOString();

  const sitemapEntries = sortedRoutes.map((route) => {
    const loc = `${siteUrl}${route}`;
    const priority = manualPriorities.get(route) || getPriority(route);

    return [
      '  <url>',
      `    <loc>${escapeXml(loc)}</loc>`,
      `    <lastmod>${lastModified}</lastmod>`,
      priority ? `    <priority>${priority}</priority>` : null,
      '  </url>',
    ]
      .filter(Boolean)
      .join('\n');
  });

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemapEntries,
    '</urlset>',
    '',
  ].join('\n');

  const robots = [
    'User-agent: *',
    'Disallow: /admin',
    'Allow: /',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    '',
  ].join('\n');

  await mkdir(publicDir, { recursive: true });
  await writeFile(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
  await writeFile(path.join(publicDir, 'robots.txt'), robots, 'utf8');

  console.log(`Generated sitemap.xml with ${sortedRoutes.length} URLs.`);
  console.log('Generated robots.txt.');
};

generate().catch((error) => {
  console.error('Failed to generate SEO files:', error);
  process.exit(1);
});
