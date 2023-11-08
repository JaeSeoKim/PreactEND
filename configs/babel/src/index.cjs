module.exports = {
  presets: [
    require.resolve("@babel/preset-env"),
    require.resolve("@babel/preset-typescript"),
    [require.resolve("@babel/preset-react"), { runtime: "automatic" }],
  ],
  plugins: ["@babel/plugin-proposal-explicit-resource-management"],
}
