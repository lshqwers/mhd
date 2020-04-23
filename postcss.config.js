module.exports = {
    plugins: {
      autoprefixer: {
        browsers: ['Android >= 4.0', 'iOS >= 8'],
      },
      'postcss-pxtorem': {
        // 转换的标准值 1rem=37.5px
        // 多少rem 44px/37.5 =
        rootValue: 37.5,
        propList: ['*'],
      },
    },
  };
