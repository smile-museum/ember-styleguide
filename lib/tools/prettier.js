module.exports = {
  deps: [
    'husky',
    'precise-commits',
    'prettier',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
  ],

  configFiles: ['.prettierrc.js', '.prettierignore'],

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
