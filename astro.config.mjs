// @ts-check
import { defineConfig } from 'astro/config';
// import dotenv from 'dotenv';

// Load environment variables before accessing them
// dotenv.config();

const prodConfig = {
  site: process.env.SITE,
  base: process.env.BASE_URL,
};

const devConfig = {
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE_URL || '/',
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;


// https://astro.build/config
export default defineConfig({
  ...config
});
