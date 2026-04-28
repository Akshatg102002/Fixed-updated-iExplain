<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/cca5f86b-87a3-4677-b618-3032cfc8f078

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Sitemap and URL configuration

- Primary website URL is set to `https://www.iexplaineducation.in`.
- Sitemap generation uses `scripts/generate-seo.ts` and outputs:
  - `public/sitemap.xml`
  - `public/robots.txt`

### Manually adding sitemap pages in future

1. Edit `seo/manual-routes.json`.
2. Add new entries under `routes`:
   - `path`: page path (for example `/new-page`)
   - `priority`: optional string like `0.8`
   - `include`: optional boolean (`false` to skip)
3. Run:

```bash
npm run generate:seo
```

This merges your manual routes with app-discovered routes and regenerates sitemap + robots files.
