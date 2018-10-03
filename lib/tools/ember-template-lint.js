const template = `/* eslint-env node */
'use strict';

module.exports = {
  plugins: ['./node_modules/@smile-io/ember-styleguide/.template-lintrc'],
  extends: ['@smile-io/ember-styleguide:recommended'],
  rules: {},
};    
`;

module.exports = {
  deps: ['ember-cli-template-lint'],

  configFiles: ['.template-lintrc.js'],

  getTemplate: () => template,

  postInstall(pkg /** isPackageAnAddon */) {
    pkg['scripts']['lint:hbs'] = 'ember-template-lint .';
  },
};
