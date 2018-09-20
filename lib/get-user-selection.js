const inquirer = require('inquirer');

module.exports = async function() {
  let { choices } = await inquirer.prompt([
    {
      type: 'checkbox',
      message: 'Choose tools to configure',
      name: 'choices',
      choices: [
        { name: 'prettier', checked: true },
        { name: 'eslint', checked: true },
        { name: 'stylelint', checked: true },
        { name: 'ember-template-lint', checked: true },
      ],
      validate: function(answer) {
        if (answer.length < 1) {
          return 'You must choose at least one topping.';
        }
        return true;
      },
    },
  ]);

  return choices;
};
