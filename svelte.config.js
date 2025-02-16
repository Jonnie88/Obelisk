import adapter from '@sveltejs/adapter-static';

const basePath = process.env.BASE_PATH || '';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		paths: {
			base: basePath
		},
		appDir: 'internal'
	}
};
