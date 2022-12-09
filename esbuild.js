//import esbuild from "esbuild";
//import sveltePlugin from "esbuild-svelte";

const esbuild = require('esbuild')
const sveltePlugin = require('esbuild-svelte')

esbuild
    .build({
        entryPoints: ["resources/js/app.js"],
        mainFields: ["svelte", "browser", "module", "main"],
        bundle: true,
        outfile: "public/js/app.js",
        plugins: [sveltePlugin()],
        logLevel: "info",
        watch: true,
        minify: true,
    })
    .catch(() => process.exit(1));