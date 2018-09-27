const readFileSync = require('../utils/read-file-sync');

const getESLintTemplate = (isPackageAnAddon) => {
  let fileName = `.eslintrc-${isPackageAnAddon ? 'addon' : 'app'}.js`;

  return `/* eslint-env node */
'use strict';

module.exports = {
  extends: ['./node_modules/@smile-io/ember-styleguide/${fileName}'],
  rules: {},
};`;
};

module.exports = {
  configFiles: ['.eslintrc.js', '.eslintignore'],

  getTemplate(templateName, isPackageAnAddon) {
    if (templateName === '.eslintrc.js') {
      return getESLintTemplate(isPackageAnAddon);
    } else {
      return readFileSync('../../.eslintignore');
    }
  },

  postInstall(pkg /** isPackageAnAddon */) {
    pkg['scripts']['lint:js'] = 'eslint .';
    pkg['scripts']['lint:js:fix'] = 'eslint . --fix';
  },
};
