import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';


const config = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,

			light: "#F4E8D2",
			rose: "#F6EDDB",
			red: "#D35125",
			gold: "#D49328",
			blue: "#3F9491"
		}
	},
	plugins: []
} satisfies Config;

export default config;
