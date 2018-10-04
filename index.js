#!/usr/bin/env node
/* eslint-env node */
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const yarnInstall = require('yarn-install');
const readPkg = require('read-pkg');
const writePkg = require('write-pkg');

const tools = require('./lib/tools');
const getUserSelection = require('./lib/get-user-selection');

const isAddon = (pkg) => {
  let val =
    Array.isArray(pkg.keywords) && pkg.keywords.indexOf('ember-addon') >= 0;
  return val;
};

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

  let pkg = readPkg.sync({ normalize: false });
  let isPackageAnAddon = isAddon(pkg);

  selectedTools.forEach((toolName) => {
    if (tools[toolName].postInstall) {
      tools[toolName].postInstall(pkg, isPackageAnAddon);
    }
  });

  let pkgScripts = pkg.scripts;
  let scripts = {};
  Object.keys(pkgScripts)
    .sort()
    .forEach((key) => (scripts[key] = pkgScripts[key]));
  pkg.scripts = scripts;
  writePkg.sync(pkg);

  selectedTools.forEach((toolName) => {
    let configFiles = tools[toolName].configFiles;

    if (tools.configFiles) {
      return;
    }

    configFiles.forEach((configFile) => {
      fs.writeFileSync(
        path.join(process.cwd(), configFile),
        tools[toolName].getTemplate(configFile, isPackageAnAddon)
      );
    });
  });

  console.log(
    `🎉🎉🎉 Setup complete. ${selectedTools.join(',')} successfully configured`
  );
  console.log(
    'For instructions on how to setup your IDE with various tools that have been setup for you visit https://github.com/smile-io/ember-styleguide#ide-support'
  );
})();
