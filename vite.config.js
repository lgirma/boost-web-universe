const path = require('path')
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ['es', 'cjs'],
            name: 'boost-web-universe'
        },
        minify: false,
        rollupOptions: {
            external: ['boost-web', 'topbar']
        }
    }
})
