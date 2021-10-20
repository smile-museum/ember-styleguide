module.exports = {
  arrowParens: 'always',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  overrides: [
    { files: '*.hbs', options: { singleQuote: false, printWidth: 100 } },
  ],
};
