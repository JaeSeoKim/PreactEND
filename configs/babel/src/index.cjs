module.exports = {
  presets: [
    require.resolve("@babel/preset-env"),
    require.resolve("@babel/preset-typescript"),
    [
      require.resolve("@babel/preset-react"),
      {
        pragma: "createElement",
        pragmaFrag: "Fragment",
        throwIfNamespace: false,
        runtime: "classic",
        importSource: "pretand-react",
      },
    ],
  ],
  plugins: ["@babel/plugin-proposal-explicit-resource-management"],
}
