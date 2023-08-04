import { terser } from "rollup-plugin-terser";
export default {
  input: "src/main.js",
  output: {
    file: "bundle.js",
    format: "es",
  },
  plugins: [terser()],
}; 