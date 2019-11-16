// svelte.config.js
const sveltePreprocess = require("svelte-preprocess");

module.exports = {
	preprocess: sveltePreprocess({
		compilerOptions: {
			module: "es2015"
		}
	})
};
