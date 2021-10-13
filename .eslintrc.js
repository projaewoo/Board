module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    //사용자가 임의로 지정한 .prettierrc.js의 적용 막기
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-unused-vars": 1,
  },
};
