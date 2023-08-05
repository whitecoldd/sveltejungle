/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: { medieval: ['MedievalSharp', 'cursive'] },
			fontSize: { huge: ['14.75rem', '14.75rem'] },
			colors: {
				light: { 100: '#E8DEBF', 300: '#C7AC68' },
				brown: { 300: '#AA6132', 400: '#7E431E' },
				primary: { 100: '#92B17A', 200: '#7B9B65', 300: '#285125', 400: '#1B341E', 500: '#0A140A' }
			},
			backgroundImage: {
				fade: 'background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(0, 0, 0, 0.00) 0%, rgba(27, 52, 30, 0.50) 100%), linear-gradient(90deg, rgba(10, 20, 10, 0.90) 0%, rgba(10, 20, 10, 0.00) 21.88%, rgba(10, 20, 10, 0.00) 79.17%, rgba(10, 20, 10, 0.90) 92.86%);'
			}
		}
	},
	plugins: []
};
