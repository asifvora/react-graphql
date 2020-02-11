const CracoWorkboxPlugin = require('craco-workbox')

module.exports = {
  plugins: [
    {
      plugin: CracoWorkboxPlugin,
    },
  ],
  babel: {
    plugins: [
      ['@babel/plugin-proposal-optional-chaining'],
      ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: true }],
    ],
  },
}
