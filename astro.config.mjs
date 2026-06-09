import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update this when the custom domain is connected (future-hitech.com).
// For now it's the Cloudflare Workers subdomain so OG images, canonical
// URLs, and sitemap entries resolve to the live deploy.
const SITE_URL = 'https://future-hightech-webpage.beko1986.workers.dev';

export default defineConfig({
  // Explicit static output — this is a fully prerendered single-page site.
  // No adapter needed for any host. Stops Cloudflare's framework preset from
  // auto-injecting @astrojs/cloudflare and producing a hybrid (SSR) build.
  output: 'static',
  site: SITE_URL,
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { port: 5182, host: true },
});
