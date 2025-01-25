const path = require("path");
module.exports = {
  // besoin de connaitre le fichier d'entré
  entry: "./src/javascript.js",
  watch: true,
  // on précise ou l'on souhaite le résultat
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // webpack-dev-server
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Dossier pour servir les fichiers
    },
    port: 8080, // Port par défaut (http://localhost:8080)
    open: true, // Ouvre automatiquement le navigateur
    hot: true, // Active le Hot Module Replacement
  },
  devtool: "source-map",
  mode: "development",
  // babel
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
  }
};
