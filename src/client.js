import * as sapper from "@sapper/app";

sapper.start({
	target: document.querySelector("#sapper")
});

// ...
import sveltePreprocess from "svelte-preprocess";

const preprocess = sveltePreprocess({
	compilerOptions: {
		module: "es2015"
	}
});

export default {
	client: {
		plugins: [
			svelte({
				preprocess
				// ...
			})
		]
	},
	server: {
		plugins: [
			svelte({
				preprocess
				// ...
			})
		]
	}
};
