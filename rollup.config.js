/* eslint-disable import/no-anonymous-default-export */
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const input = 'src/index.ts';
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const cssExportMap = {};

const plugins = [
  typescript({
    typescript: require('typescript'),
  }),
];

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    plugins,
    external,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    plugins,
    external,
  },
];
