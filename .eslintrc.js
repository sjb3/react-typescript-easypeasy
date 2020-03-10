module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin: react/recommended",
    "plugin: @typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "airbnb"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }]
  }
};
