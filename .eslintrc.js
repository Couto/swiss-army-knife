module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb-base",
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "import",
    "flowtype"
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
};
