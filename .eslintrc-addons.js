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
    'comma-dangle': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'object-curly-spacing': ['error', 'always', { arraysInObjects: true }],
    quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    semi: ['error', 'always'],

    'prettier/prettier': 'off',

    'ember/order-in-models': [
      'off',
      {
        order: [
          // prettier-ignore
          'service',
          'attribute',
          'relationship',
          'single-line-function',
          'multi-line-function',
        ],
      },
    ],

    'ember/order-in-components': [
      'off',
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
      'off',
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
      'off',
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
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js',
        'lib/**/*.js',
        'lib/*.js',
      ],
      excludedFiles: ['addon/**', 'addon-test-support/**', 'app/**', 'tests/dummy/app/**'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2018,
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
      }),
    },
  ],
};
