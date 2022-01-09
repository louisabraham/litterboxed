import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		brython_promise
	}
});

export default app;