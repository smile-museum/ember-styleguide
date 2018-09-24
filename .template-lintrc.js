module.exports = {
  name: '@smile-io/ember-styleguide',
  rules: {},
  configurations: {
    recommended: {
      extends: 'recommended',
      rules: {
        'img-alt-attributes': false,
        'simple-unless': false,
        quotes: 'double',
      },
    },
  },
};
