const fs = require('fs');
const path = require('path');

const eslintRuleFile = `/* eslint-env node */
'use strict';

module.exports = {
  extends: ['./node_modules/@smile-io/ember-styleguide/.eslintrc.js'],
  rules: {},
};
`;

module.exports = {
  configFiles: ['.eslintrc.js', '.eslintignore'],

  getTemplate(templateName) {
    if (templateName === '.eslintrc.js') {
      return eslintRuleFile;
    } else {
      return fs.readFileSync(path.join(__dirname, '../../.eslintignore'), 'utf-8');
    }
  },

  postInstall(pkg /** isPackageAnAddon */) {
    pkg['scripts']['lint:js'] = 'eslint .';
    pkg['scripts']['lint:js:fix'] = 'eslint . --fix';
  },
};
