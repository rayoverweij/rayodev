import { Crimson_Pro } from "next/font/google";
import localFont from "next/font/local";


const serif = Crimson_Pro({
	subsets: ["latin"],
	display: "swap"
});

const mono = localFont({
	src: [
		{
			path: "./CartographCF-Regular.woff2",
			weight: "400",
			style: "normal"
		},
		{
			path: "./CartographCF-Bold.woff2",
			weight: "700",
			style: "normal"
		}
	],
	display: "swap"
});

const modula = localFont({
	src: "./modula_mono.woff2",
	display: "swap"
});


export { serif, modula, mono };
