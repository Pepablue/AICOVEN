/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"./index.html",
		"./index.js",
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#fff',
				secondary: "#000",
			}
		},
	},
	plugins: [],
}

