import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { db, collection, getDocs } from '../firebase.ts';

type ManualSeoRoute = {
  path: string;
  priority?: string;
  source?: string;
  include?: boolean;
};

type ManualSeoConfig = {
  siteUrl: string;
  routes: ManualSeoRoute[];
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const configDir = path.join(repoRoot, 'seo');
const configPath = path.join(configDir, 'manual-routes.json');

const staticRoutes: ManualSeoRoute[] = [
  { path: '/', priority: '1.0', source: 'manual:static' },
  { path: '/about', priority: '0.8', source: 'manual:static' },
  { path: '/services', priority: '0.9', source: 'manual:static' },
  { path: '/blog', priority: '0.9', source: 'manual:static' },
  { path: '/blogs', priority: '0.7', source: 'manual:static' },
  { path: '/blog-list', priority: '0.7', source: 'manual:static' },
  { path: '/contact', priority: '0.9', source: 'manual:static' },
  { path: '/privacy-policy', priority: '0.4', source: 'manual:static' },
  { path: '/terms-conditions', priority: '0.4', source: 'manual:static' },
];

const normalizePath = (value: string): string => {
  const trimmed = value.trim();
  if (!trimmed || trimmed === '/') return '/';
  return `/${trimmed.replace(/^\/+/, '').replace(/\/+$/, '')}`;
};

const run = async () => {
  const remoteSnapshot = await getDocs(collection(db, 'dynamic_pages'));
  const adminRoutes: ManualSeoRoute[] = remoteSnapshot.docs
    .map((docSnap) => {
      const data = docSnap.data() as any;
      const slug = typeof data?.slug === 'string' && data.slug.trim()
        ? data.slug.trim()
        : docSnap.id;

      return {
        path: `/${slug}`,
        priority: '0.8',
        source: `admin:${data?.category || 'Uncategorized'}`,
      };
    })
    .filter((entry) => entry.path !== '/admin' && entry.path !== '/404');

  let existing: ManualSeoConfig = { siteUrl: 'https://iexplaineducation.in', routes: [] };
  try {
    const content = await readFile(configPath, 'utf8');
    existing = JSON.parse(content) as ManualSeoConfig;
  } catch {
    // create fresh config
  }

  const merged = new Map<string, ManualSeoRoute>();

  for (const route of [...(existing.routes || []), ...staticRoutes, ...adminRoutes]) {
    const normalizedPath = normalizePath(route.path);
    merged.set(normalizedPath, {
      ...route,
      path: normalizedPath,
    });
  }

  const config: ManualSeoConfig = {
    siteUrl: existing.siteUrl || 'https://iexplaineducation.in',
    routes: [...merged.values()].sort((a, b) => a.path.localeCompare(b.path)),
  };

  await mkdir(configDir, { recursive: true });
  await writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`, 'utf8');

  console.log(`Updated ${path.relative(repoRoot, configPath)} with ${config.routes.length} routes.`);
  console.log(`Fetched ${adminRoutes.length} routes from admin dynamic_pages.`);
};

run().catch((error) => {
  console.error('Failed to initialize manual SEO routes from admin:', error);
  process.exit(1);
});
