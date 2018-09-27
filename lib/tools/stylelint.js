const readFileSync = require('../utils/read-file-sync');

module.exports = {
  configFiles: ['stylelint.config.js'],

  deps: ['ember-cli-scss-lint'],

  getTemplate() {
    return readFileSync('../../stylelint.config.js');
  },
};
