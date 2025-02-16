import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
const repoName = 'your-repo-name'; // Replace with your actual repo name

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		paths: {
			base: dev ? '' : `/${repoName}`
		},
		appDir: 'internal'
	}
};
