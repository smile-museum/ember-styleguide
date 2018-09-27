const readFileSync = require('../utils/read-file-sync');

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
      return readFileSync('../../.eslintignore');
    }
  },

  postInstall(pkg /** isPackageAnAddon */) {
    pkg['scripts']['lint:js'] = 'eslint .';
    pkg['scripts']['lint:js:fix'] = 'eslint . --fix';
  },
};
