const readFileSync = require('../utils/read-file-sync');
const getDefaultConfigFileTemplate = require('../utils/get-default-config-file-template');

module.exports = {
  deps: [
    'husky',
    'precise-commits',
    'prettier',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
  ],

  configFiles: ['.prettierrc.js', '.prettierignore'],

  getTemplate(templateName) {
    if (templateName === '.prettierignore') {
      return readFileSync('../../.prettierignore');
    }
    return getDefaultConfigFileTemplate(templateName);
  },

  postInstall(pkg, isPackageAnAddon) {
    pkg['husky'] = {
      hooks: {
        'pre-commit': 'eslint . --fix;precise-commits',
      },
    };

    if (isPackageAnAddon) {
      pkg['scripts']['prettier'] =
        "prettier --write '{addon,app,blueprints,config,lib,tests,mirage}/**/*.js' *.js";
    } else {
      pkg['scripts']['prettier'] = "prettier --write '{app,config,lib,tests,mirage}/**/*.js' *.js";
    }
  },
};
