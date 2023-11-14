/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "react", "react-hooks"],
  rules: {
    "no-prototype-builtins": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
}
