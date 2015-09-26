"use strict";

module.exports = {
  "entry": "./entry.js",
  "output": {
    "path": __dirname,
    "filename": "bundle.js"
  },
  "module": {
    "loaders": [
      { "test": /\.woff2?$|\.ttf$|\.eot$|\.svg$/, "loader": "file"},
      { "test": /\.css$/, "loader": "style!css"},
      { "test": /\.scss$/, "loader": "style!css!sass"}
    ]
  }
};
