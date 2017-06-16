module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb-base",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype",
  ],
  "plugins": [
    "import",
    "flowtype",
    "prettier"
  ],
  "rules": {
    "flowtype/no-weak-types": ["error"],
    "prettier/prettier": ["error"]
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
};
