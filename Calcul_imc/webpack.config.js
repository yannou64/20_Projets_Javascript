const path = require("path");
module.exports = {
  // besoin de connaitre le fichier d'entré
  entry: "./src/javascript.js",

  // on précise ou l'on souhaite le résultat
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  mode: "development"
};
