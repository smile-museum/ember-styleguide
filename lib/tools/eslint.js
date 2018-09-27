module.exports = {
  configFiles: ['.eslintrc.js', '.eslintignore'],

  getTemplate() {
    return `/* eslint-env node */
    'use strict';
    
    module.exports = {
      extends: ['./node_modules/@smile-io/ember-styleguide/.eslintrc.js'],
      rules: {},
    };
    `;
  },
};
