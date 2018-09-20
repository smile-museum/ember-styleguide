#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yarnInstall = require('yarn-install');
const tools = require('./lib/tools');

const getUserSelection = require('./lib/get-user-selection');

(async () => {
  let selectedTools = await getUserSelection();

  let depsToInstall = [];
  let configFiles = [];

  selectedTools.forEach((toolName) => {
    if (tools[toolName].deps) {
      depsToInstall = [...depsToInstall, ...tools[toolName].deps];
    }

    if (tools[toolName].configFiles) {
      configFiles = [...configFiles, ...tools[toolName].configFiles];
    }
  });

  if (depsToInstall.length > 0) {
    let cwd = process.cwd();
    yarnInstall({ deps: depsToInstall, dev: true, cwd });
  }

  const configFileTemplate = (fileName) => `
/* eslint-env node */
'use strict';

module.exports = require('@smile-io/frontend-styleguide/${fileName.replace('.js', '')}');

`;

  configFiles.forEach((configFile) =>
    fs.writeFileSync(path.join(process.cwd(), configFile), configFileTemplate(configFile)),
  );

  console.log(`🎉🎉🎉 Setup complete. ${selectedTools.join(',')} successfully configured`);
  console.log(
    'For instructions on how to setup your IDE with various tools that have been setup for you visit https://github.com/smile-io/ember-styleguide#ide-support',
  );
})();
