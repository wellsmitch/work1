// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    // "postcss-aspect-ratio-mini": {},
    // "postcss-write-svg": {utf8: false},
    // "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, // (Number) The width of the viewport.
      //viewportHeight: 752, // (Number) The height of the viewport.
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw', // (String) Expected units.
      fontViewportUnit: 'px', // TODO 字体仍然会转换？
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false // (Boolean) Allow px to be converted in media queries.
    },
     "postcss-viewport-units": {}, // vw兼容处理
    "cssnano": {
      "preset": "advanced",
      "autoprefixer": false,
      "postcss-zindex": false
    }
  }
};
