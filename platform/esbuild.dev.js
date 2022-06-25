const esbuild = require("esbuild");
const commonConfig = require("./esbuild.common.js");

esbuild
  .build({
    ...commonConfig,
    minify: false,
    sourcemap: false,
    watch: false,
  })
  .then(() => console.log("⚡ Done"))
  .catch(() => process.exit(1));
