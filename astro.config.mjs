import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tunnel from "astro-tunnel";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
	site: "https://rayo.dev",

	image: {
		layout: "constrained"
	},

	integrations: [sitemap(), tunnel()],

	vite: {
		plugins: [tailwindcss()]
	},
});
