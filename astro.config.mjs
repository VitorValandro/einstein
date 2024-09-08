import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations:
    [
      tailwind({
        // Isso permite o override do base.css do Astro e aplicar layers de estilos do Tailwind
        applyBaseStyles: false,
      }),
      react(),
      storyblok({
        accessToken: env.STORYBLOK_TOKEN,
        components: {
          hero: 'storyblok/Hero',
          page: 'storyblok/Page',
          results: 'storyblok/Results',
        },
        apiOptions: {
          region: 'us',
        },
      })
    ],
});
