import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

// Update this when the custom domain is connected (future-hitech.com).
// For now it's the Cloudflare Workers subdomain so OG images, canonical
// URLs, and sitemap entries resolve to the live deploy.
const SITE_URL = 'https://future-hightech-webpage.beko1986.workers.dev';

export default defineConfig({
  output: "hybrid",
  site: SITE_URL,
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { port: 5182, host: true },
  adapter: cloudflare()
});