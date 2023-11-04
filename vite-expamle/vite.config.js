import { defineConfig } from 'vite'
import { resolve } from 'path'
// import pages from './config/pages.config'

const pagesInput = {}

// pages.forEach((page => {
//     pagesInput[page.name] = page.path
// }));

export default defineConfig({
    build: {
        target: 'es2019',
        outDir: 'dist',
        // minify: 'terser',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'pages/about.html'),
                secondary: resolve(__dirname, "pages/secondary.html"),
                'page-1': resolve(__dirname, "pages/articles/page-1.html"),
                'page-2': resolve(__dirname, "pages/articles/page-2.html")
            } 
        }
    },
    base: '',
    server: {
        port: 3000,
        host: '0.0.0.0',
        hmr: true,
    }
})