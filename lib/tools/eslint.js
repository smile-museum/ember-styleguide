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

  postInstall(pkg /** isPackageAnAddon */) {
    pkg['scripts']['lint:js'] = 'eslint .';
    pkg['scripts']['lint:js:fix'] = 'eslint . --fix';
  },
};
