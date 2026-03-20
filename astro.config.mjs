// @ts-check
import { defineConfig } from 'astro/config';
import { BASE_URL } from './public/assets/data/webdetails';

// https://astro.build/config
export default defineConfig({
  site: 'https://roysumnima.github.io',
  base: `/${BASE_URL}`,
});