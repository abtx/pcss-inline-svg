module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    'postcss-nested': {},
    'postcss-inline-svg': {},
    'postcss-svgo': {},
    'postcss-css-variables': {},
    'cssnano':{
            preset: 'default',
        },
  },
}
