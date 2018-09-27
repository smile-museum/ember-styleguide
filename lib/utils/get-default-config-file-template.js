module.exports = function getDefaultConfigFileTemplate(fileName) {
  return `/* eslint-env node */
'use strict';

module.exports = require('@smile-io/ember-styleguide/${fileName.replace('.js', '')}');
`;
};
