#!/usr/bin/env node

// `yarn add prettier precise-commits husky@next --dev`
//
/**
{
  "husky": 
}
   */

//    ''

const install = require('yarn-install');
const readPkg = require('read-pkg');
const writePkg = require('write-pkg');
const fs = require('fs');
const path = require('path');

const deps = [
  'husky',
  'precise-commits',
  'prettier',
  'eslint-config-prettier',
  'ember-cli-scss-lint',
];

install({
  deps,
  dev: true,
  cwd: process.cwd(),
});

let pkg = readPkg.sync({ normalize: false });

pkg['husky'] = {
  hooks: {
    'pre-commit': 'precise-commits',
  },
};

pkg['scripts']['prettier'] = `prettier --write '{app,tests,mirage}/**/*.js' *.js`;
pkg['scripts'] = pkg.scripts;

writePkg.sync(pkg);

const configFileTemplate = (fileName) => `
/* eslint-env node */
'use strict';

module.exports = require('@smile-io/frontend-styleguide/${fileName.replace('.js', '')}');

`;

const configFiles = [
  '.prettierrc.js',
  '.eslintrc.js',
  '.template-lintrc.js',
  'stylelint.config.js',
];

configFiles.forEach((configFile) =>
  fs.writeFileSync(path.join(process.cwd(), configFile), configFileTemplate(configFile)),
);

console.log('🎉🎉🎉 Setup complete');
