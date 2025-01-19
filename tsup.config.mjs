import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['./src/index.ts'],
    clean: true,
    dts: true,
    sourcemap: true,
    format: ['esm'],
    target: 'node18',
    minify: true,
    cjsInterop: true,
})
