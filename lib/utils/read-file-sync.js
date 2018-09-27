const fs = require('fs');
const path = require('path');

module.exports = function readFileSync(filePath) {
  return fs.readFileSync(path.join(__dirname, filePath), 'utf-8');
};
