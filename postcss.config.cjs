module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 375,
    },
  },
};
// 用postcss插件对移动端进行适配
// 在vite中使用module.export导出的话,需要使用.cjs后缀
