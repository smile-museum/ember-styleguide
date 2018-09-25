module.exports = {
  configFiles: ['.eslintrc.js'],

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
