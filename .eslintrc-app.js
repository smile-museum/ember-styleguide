const commonConfig = require('./.eslintrc-common-config');

module.exports = {
  ...commonConfig,
  overrides: [
    // node files
    {
      files: [
        'stylelint.config.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/*.js',
        'lib/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2018,
      },
      env: {
        browser: false,
        node: true,
      },
    },
  ],
};
