import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/shoelace-components.ts',
  output: [
    { dir: '../../dist', format: 'es' },
    { dir: 'dist', format: 'es' },
  ],
  plugins: [typescript(), resolve()],
};
