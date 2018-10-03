const readFileSync = require('../utils/read-file-sync');

const getESLintTemplate = (isPackageAnAddon) => `/* eslint-env node */
'use strict';

module.exports = {
  plugins: ['smile-ember'],
  extends: ['plugin:smile-ember/${isPackageAnAddon ? 'addon' : 'app'}'],
  rules: {},
};`;

module.exports = {
  deps: ['eslint-plugin-smile-ember'],

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
