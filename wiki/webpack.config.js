const path = require("path");
module.exports = {
  entry: "./src/script.js",
  output: {
    path: path.resolve(__dirname, "dist"), // ✅ Vérifier la résolution correcte
    filename: "bundle.js",
  },
  mode: "development",
  watch: true,
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    port: 8080,
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        type: "asset/resource",
      },
    ],
  },
};
