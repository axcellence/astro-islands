import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), solidJs(), tailwind(), svelte()]
});