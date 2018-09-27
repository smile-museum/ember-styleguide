module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['ember', 'prettier'],
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'prettier'],
  env: {
    browser: true,
  },
  rules: {
    'comma-dangle': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'object-curly-spacing': ['error', 'always', { arraysInObjects: true }],
    quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    semi: ['error', 'always'],

    'prettier/prettier': 'error',

    'order-in-models': require('./lib/eslint-rules/order-in-models'),

    'ember/order-in-components': [
      'error',
      {
        order: [
          'service',
          'property',
          'empty-method',
          'single-line-function',
          'multi-line-function',
          'observer',
          'method',
          'init',
          'didReceiveAttrs',
          'willRender',
          'willInsertElement',
          'didInsertElement',
          'didRender',
          'didUpdateAttrs',
          'willUpdate',
          'didUpdate',
          'willDestroyElement',
          'willClearRender',
          'didDestroyElement',
          'actions',
        ],
      },
    ],

    'ember/order-in-controllers': [
      'error',
      {
        order: [
          'query-params',
          'service',
          'controller',
          'inherited-property',
          'empty-method',
          'property',
          'single-line-function',
          'multi-line-function',
          'observer',
          'method',
          'actions',
        ],
      },
    ],

    'ember/order-in-routes': [
      'error',
      {
        order: [
          'service',
          'inherited-property',
          'property',
          'single-line-function',
          'multi-line-function',
          'beforeModel',
          'model',
          'afterModel',
          'serialize',
          'setupController',
          'redirect',
          'activate',
          'renderTemplate',
          'resetController',
          'deactivate',
          'method',
          'actions',
          'empty-method',
        ],
      },
    ],
  },
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
