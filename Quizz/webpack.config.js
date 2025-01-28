// transforme le chemin relatif en absolue
const path = require("path");

module.exports = {
  entry: "./src/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
        directory: './dist'
    },
    open: true
},
  watch: true,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i, // Cible les fichiers CSS
        use: ["style-loader", "css-loader"], // Applique les loaders
      },
    ],
  },
};
