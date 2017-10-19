'use strict';

module.exports = function (modules) {
  const plugins = [
    require.resolve('babel-plugin-transform-es3-member-expression-literals'),
    require.resolve('babel-plugin-transform-es3-property-literals'),
    require.resolve('babel-plugin-transform-object-assign'),
    require.resolve('babel-plugin-transform-class-properties'),
  ];
  if (modules !== false) {
    plugins.push(require.resolve('babel-plugin-add-module-exports'));
  }
  plugins.push([require.resolve('babel-plugin-transform-runtime'), {
    polyfill: false,
  }]);
  return {
    presets: [
      require.resolve('babel-preset-react'),
      [require.resolve('babel-preset-env'), {
        modules,
        targets: {
          browsers: [
            'last 2 versions',
            'Firefox ESR',
            '> 1%',
            'ie >= 9',
            'iOS >= 8',
            'Android >= 4',
          ],
        },
      }],
    ],
    plugins,
  };
};
