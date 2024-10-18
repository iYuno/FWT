module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "@feature-sliced/eslint-config/rules/import-order/experimental",
    "@feature-sliced/eslint-config/rules/layers-slices",
    "plugin:@conarti/feature-sliced/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "stylelint"],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  ignorePatterns: ["dist"],
  rules: {
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["*.scss", "*.css"],
      rules: {
        "no-alert": "off",
        "no-console": "off",
        "prettier/prettier": "off",
      },
    },
  ],
};
