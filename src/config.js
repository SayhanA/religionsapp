export const BASE_URL =
	import.meta.env.MODE === 'production'
		? 'https://religion-admin-bjir.vercel.app'
		: 'http://localhost:3000';
