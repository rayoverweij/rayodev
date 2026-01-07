import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import tunnel from "astro-tunnel";


export default defineConfig({
	adapter: vercel(),
	integrations: [tunnel()],
	vite: {
		plugins: [tailwindcss()]
	}
});
