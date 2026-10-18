import { defineConfig, transformWithEsbuild } from 'vite';
export default defineConfig({
  plugins: [{
    name: 'allow-jsx-in-js-pages',
    async transform(code, id) {
      if (/\/src\/pages\/.*\.js$/.test(id)) {
        return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'automatic' });
      }
    }
  }],
  optimizeDeps: { esbuildOptions: { loader: { '.js': 'jsx' } } }
});
