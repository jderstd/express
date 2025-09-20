const { defineConfig } = require("tsdown");

export default defineConfig({
    entry: {
        index: "./src/index.js",
    },
    dts: false,
    format: "cjs",
    outDir: "./dist",
    clean: true,
    platform: "node",
    treeshake: true,
    sourcemap: false,
    minify: false,
    shims: true,
    unbundle: false,
    inputOptions: {
        experimental: {
            attachDebugInfo: "none",
        },
    },
});
