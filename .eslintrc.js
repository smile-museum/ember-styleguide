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
  globals: {
    SmileUI: true,
  },
  rules: {
    'comma-dangle': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'object-curly-spacing': ['error', 'always', { arraysInObjects: true }],
    'array-bracket-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'template-curly-spacing': ['error', 'always'],
    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: false,
      },
    ],

    'prettier/prettier': 2,

    'ember/no-empty-attrs': 2,
    'ember/no-jquery': 2,
    'ember/no-observers': 2,
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
        'lib/*/index.js',
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
