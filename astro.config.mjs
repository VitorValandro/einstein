import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const { STORYBLOK_TOKEN } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: 'https://vitorvalandro.github.io',
  base: 'einstein',
  integrations:
    [
      tailwind({
        // Isso permite o override do base.css do Astro e aplicar layers de estilos do Tailwind
        applyBaseStyles: false,
      }),
      react(),
      storyblok({
        accessToken: import.meta.env.STORYBLOK_TOKEN || STORYBLOK_TOKEN,
        components: {
          hero: 'storyblok/Hero',
          page: 'storyblok/Page',
          results: 'storyblok/Results',
          about: 'storyblok/About',
          partners: 'storyblok/Partners',
          testimonials: 'storyblok/Testimonials',
          "join-us": 'storyblok/JoinUs',
          support: 'storyblok/Support',
          footer: 'storyblok/Footer',
        },
        apiOptions: {
          region: 'us',
        },
      })
    ],
});
