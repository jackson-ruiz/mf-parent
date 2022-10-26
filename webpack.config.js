const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
const Dotenv = require("dotenv-webpack");
const { merge } = require("webpack-merge");
const commonConfiguration = require("../mf-parent/webpack.common");

const port = 3000;
const childrenUrl = "http://localhost:3001";
const developmentConfiguration = {
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  devServer: {
    port: port,
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ModuleFederationPlugin({
      name: "mf_parent",
      filename: "remoteEntry.js",
      remotes: {
        MfChildren: `MfChildren@${childrenUrl}/remoteEntry.js`,
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
};

module.exports = merge(commonConfiguration, developmentConfiguration);
