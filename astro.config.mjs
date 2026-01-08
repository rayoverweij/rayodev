import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import tunnel from "astro-tunnel";


export default defineConfig({
	integrations: [tunnel()],
	vite: {
		plugins: [tailwindcss()]
	},
	image: {
		layout: "constrained"
	}
});
