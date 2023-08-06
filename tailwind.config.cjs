/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: { medieval: ['MedievalSharp', 'cursive'], neon: ['Neon Tubes'] },
			fontSize: { huge: ['14.75rem', '14.75rem'], mobile: ["6.75rem", "6.75rem"] },
			colors: {
				light: { 100: '#E8DEBF', 300: '#C7AC68' },
				brown: { 300: '#AA6132', 400: '#7E431E' },
				primary: { 100: '#92B17A', 200: '#7B9B65', 300: '#285125', 400: '#1B341E', 500: '#0A140A' },
				neon: { 100: '#00FFFF', 200: '#00B8D4', 300: '#29B6F6' },
				flame: { 100: '#FFA500', 200: '#FF5722', 300: '#FF4500' }
			},
			backgroundImage: {
				fade: 'background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(0, 0, 0, 0.00) 0%, rgba(27, 52, 30, 0.50) 100%), linear-gradient(90deg, rgba(10, 20, 10, 0.90) 0%, rgba(10, 20, 10, 0.00) 21.88%, rgba(10, 20, 10, 0.00) 79.17%, rgba(10, 20, 10, 0.90) 92.86%);'
			},
			dropShadow: {
				neon: '0px 0px 7px #00FFFF',
				neonobj: '0px 0px 10px #00FFFF',
				flame: '0px 0px 7px #FFA500',
				flameobj: '0px 0px 20px #FFA500',
				white: '0px 0px 7px #FFA500'
			},

		}
	},
	plugins: []
};
