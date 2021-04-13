// TODO: Include packages needed for this application
const questions = require('inquirer');

// TODO: Create an array of questions for user input
questions
  .prompt([
    {
        type: 'input',
        name: 'your-project-title',
        message: 'What is your Project Title?',
        
    },
    {
        type: 'input',
        name: 'description-motivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'description-problem-solve',
        message: 'What problem does it solve',
    },
    {
        type: 'input',
        name: 'description-learn',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'install-project',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage-screenshots-path',
        message: 'Include screenshots path',
    },
    {
        type: 'input',
        name: 'credits-collaborators',
        message: 'List your collaborators',
    },
    {
        type: 'input',
        name: 'features',
        message: 'List your Projects Features',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
