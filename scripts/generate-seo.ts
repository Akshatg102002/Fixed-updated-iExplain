import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

type ManualSeoRoute = {
  path: string;
  lastmod?: string;
  priority?: string;
  include?: boolean;
  source?: string;
};

type ManualSeoConfig = {
  siteUrl?: string;
  routes: ManualSeoRoute[];
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const publicDir = path.join(repoRoot, 'public');
const configPath = path.join(repoRoot, 'seo', 'manual-routes.json');

const normalizeSiteUrl = (value: string): string => value.replace(/\/$/, '');

const normalizePath = (value: string): string => {
  const trimmed = value.trim();
  if (!trimmed) return '/';
  if (trimmed === '/') return '/';
  return `/${trimmed.replace(/^\/+/, '').replace(/\/+$/, '')}`;
};

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const isIsoDate = (value: string) => !Number.isNaN(Date.parse(value));

const generate = async () => {
  const rawConfig = await readFile(configPath, 'utf8');
  const config = JSON.parse(rawConfig) as ManualSeoConfig;

  if (!Array.isArray(config.routes) || config.routes.length === 0) {
    throw new Error('seo/manual-routes.json must contain a non-empty "routes" array.');
  }

  const siteUrl = normalizeSiteUrl(process.env.SITE_URL || config.siteUrl || 'https://iexplaineducation.in');
  const generatedAt = new Date().toISOString();

  const routeMap = new Map<string, ManualSeoRoute>();

  for (const route of config.routes) {
    if (!route?.path || route.include === false) continue;
    const normalized = normalizePath(route.path);
    if (normalized === '/admin' || normalized.startsWith('/admin/')) continue;
    routeMap.set(normalized, { ...route, path: normalized });
  }

  const sortedRoutes = [...routeMap.values()].sort((a, b) => a.path.localeCompare(b.path));

  const sitemapEntries = sortedRoutes.map((route) => {
    const loc = `${siteUrl}${route.path}`;
    const lastmod = route.lastmod && isIsoDate(route.lastmod) ? route.lastmod : generatedAt;

    return [
      '  <url>',
      `    <loc>${escapeXml(loc)}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      route.priority ? `    <priority>${route.priority}</priority>` : null,
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

  console.log(`Generated sitemap.xml from manual routes (${sortedRoutes.length} URLs).`);
  console.log('Generated robots.txt.');
};

generate().catch((error) => {
  console.error('Failed to generate SEO files:', error);
  process.exit(1);
});
