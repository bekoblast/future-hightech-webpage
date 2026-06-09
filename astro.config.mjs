import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update this to your production URL when the custom domain is connected.
// For now it's the Netlify subdomain so OG images and canonical URLs resolve correctly.
const SITE_URL = 'https://gilded-alfajores-2c3f21.netlify.app';

export default defineConfig({
  // Explicit static output — this is a fully prerendered single-page site.
  // No adapter needed for any host. Stops Cloudflare's framework preset from
  // auto-injecting @astrojs/cloudflare and producing a hybrid (SSR) build.
  output: 'static',
  site: SITE_URL,
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { port: 5182, host: true },
});
