/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./src/**/*.{js,jsx,ts,tsx,html,ttf}"],
	theme: {
		extend: {
			colors: {
				cyan: {
					900: "#C6F6FF",
				},
				green: {
					900: "#0cce6b",
				},
				yellow: {
					900: "#FFBE0B",
				},
				red: {
					900: "#EF233C",
				},
				navy: {
					900: "#2B2D42",
				},
				gray: {
					900: "#d4d4d4"
				}
			},
			fontFamily: {
				arimo: "Arimo",
				// roboto: "Roboto Slab",
				// cormorant: "Cormorant Garamond",
				// custom: ['arimo', 'Helvetica', 'Arial', 'sans-serif'],
			}
		},
	},
	plugins: [],
});
