// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path, { resolve } from "path";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
    plugins: [
        vue(),
        dts({
            include: ["src/**/*.ts", "src/**/*.vue"],
            outDir: "dist/types",
        }),
        cssInjectedByJsPlugin(),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "TriStateCheckbox",
            fileName: "tri-state-checkbox",
            formats: ["es", "umd"],
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
                exports: "named",
            },
        },
    },
});
