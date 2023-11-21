module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["@configs/eslint-config"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
}
