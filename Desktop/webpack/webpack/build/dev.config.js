const webpackMerge = require('webpack-merge');
const baseConfig = require("./base.config");

module.exports = webpackMerge(baseConfig,{
  mode: "development",
  devServer: {
    contentBase: "./dist",
    inline: true,
  },
})
