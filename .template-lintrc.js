module.exports = {
  name: '@smile-io/ember-styleguide',
  rules: {},
  configurations: {
    recommended: {
      extends: 'recommended',
      rules: {
        'require-valid-alt-text': false,
        'simple-unless': false,
        quotes: 'double',
      },
    },
  },
};
