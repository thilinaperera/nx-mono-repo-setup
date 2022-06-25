const esbuild = require("esbuild");
const commonConfig = require("./esbuild.common.js");

esbuild
  .build({
    ...commonConfig,
    minify: true,
    sourcemap: true,
    watch: false,
    define: {
      "process.env.NODE_ENV": "'production'",
    }
  })
  .then(() => console.log("⚡ Done"))
  .catch(() => process.exit(1));
