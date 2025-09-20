import { defineConfig } from "vitest/config";

export default defineConfig({
    optimizeDeps: {
        exclude: [
            "@jderstd/express",
        ],
    },
    test: {
        logHeapUsage: true,
    },
});
