import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({ fallback: "404.html" }),  // GitHub pages support
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
		},
		prerender: {
			entries: [],
		},
	},
	compilerOptions: {
		runes: true,  // Strictly modern Svelte 5
	},
};

export default config;
