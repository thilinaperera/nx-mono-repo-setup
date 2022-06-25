const { node } = require("./.vendors.cache.json");
const { nodeExternalsPlugin } = require("esbuild-node-externals");
module.exports = {
  entryPoints: ["./src/index.ts"],
  outfile: "dist/index.js",
  bundle: true,
  minify: true,
  platform: "node",
  sourcemap: true,
  target: `node${node}`,
  watch: true,
  plugins: [nodeExternalsPlugin()],
};
