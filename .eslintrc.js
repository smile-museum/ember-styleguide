module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
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
    // 'array-bracket-spacing': ['error', 'always'],
    // 'array-element-newline': ['error', 'consistent'],
    quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    semi: ['error', 'always'],
    // 'template-curly-spacing': ['error', 'always'],
    // 'generator-star-spacing': [
    //   'error',
    //   'before'
    // ],

    'prettier/prettier': 2,

    'ember/no-empty-attrs': 2,
    'ember/no-jquery': 2,
    'ember/no-observers': 2,

    'ember/order-in-models': [
      2,
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
      2,
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
          'actions',
          'willDestroyElement',
          'willClearRender',
          'didDestroyElement',
        ],
      },
    ],

    'ember/order-in-controllers': [
      2,
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
      2,
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
          'method',
          'resetController',
          'deactivate',
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
        ecmaVersion: 2015,
      },
      env: {
        browser: false,
        node: true,
      },
    },
  ],
};
