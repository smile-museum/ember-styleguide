#!/usr/bin/env node

/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const yarnInstall = require('yarn-install');
const tools = require('./lib/tools');

const getUserSelection = require('./lib/get-user-selection');

(async () => {
  let selectedTools = await getUserSelection();

  let depsToInstall = selectedTools.reduce((depsToInstall, toolName) => {
    if (tools[toolName].deps) {
      return [...depsToInstall, ...tools[toolName].deps];
    }
    return depsToInstall;
  }, []);

  if (depsToInstall.length > 0) {
    let cwd = process.cwd();
    yarnInstall({ deps: depsToInstall, dev: true, cwd });
  }

  selectedTools.forEach((toolName) => {
    if (tools[toolName].postInstall) {
      tools[toolName].postInstall();
    }
  });

  const configFileTemplate = (fileName) => `/* eslint-env node */
'use strict';

module.exports = require('@smile-io/ember-styleguide/${fileName.replace('.js', '')}');
`;

  selectedTools.forEach((toolName) => {
    let configFiles = tools[toolName].configFiles;

    if (tools.configFiles) {
      return;
    }

    configFiles.forEach((configFile) => {
      let content = configFileTemplate(configFile);

      if (tools[toolName].getTemplate) {
        content = tools[toolName].getTemplate(configFile);
      }

      fs.writeFileSync(path.join(process.cwd(), configFile), content);
    });
  });

  console.log(`🎉🎉🎉 Setup complete. ${selectedTools.join(',')} successfully configured`);
  console.log(
    'For instructions on how to setup your IDE with various tools that have been setup for you visit https://github.com/smile-io/ember-styleguide#ide-support',
  );
})();
