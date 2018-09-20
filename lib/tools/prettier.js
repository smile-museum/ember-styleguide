const readPkg = require('read-pkg');
const writePkg = require('write-pkg');

module.exports = {
  deps: [
    'husky',
    'precise-commits',
    'prettier',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
  ],

  configFiles: ['.prettierrc.js'],

  postInstall() {
    let pkg = readPkg.sync({ normalize: false });

    pkg['husky'] = {
      hooks: {
        'pre-commit': 'precise-commits',
      },
    };

    pkg['scripts']['prettier'] = `prettier --write '{app,tests,mirage}/**/*.js' *.js`;

    writePkg.sync(pkg);
  },
};
