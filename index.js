// fs library package for reading/writing files
const fs = require('fs');
// TODO: Include packages needed for this application
const questions = require('inquirer');

// gets information from generateMarkdown.js
const generateMarkdownInfo = require('./js/generateMarkdown.js');

// TODO: Create an array of questions for user input
questions
    .prompt([
        {
            type: 'input',
            name: 'yourProjectTitle',
            message: 'What is your Project Title?',
        },
        {
            type: 'input',
            name: 'descriptionMotivation',
            message: 'What was your motivation?',
        },
        {
            type: 'input',
            name: 'descriptionBuild',
            message: 'Why did you build this project?',
        },
        {
            type: 'input',
            name: 'descriptionProblemSolve',
            message: 'What problem does it solve?',
        },
        {
            type: 'input',
            name: 'descriptionLearn',
            message: 'What did you learn?',
        },
        {
            type: 'confirm',
            name: 'tableOfContents',
            message: 'What u want in your Table of Contents',
        },
        {
            type: 'input',
            name: 'installProject',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Add screenshots path',
        },
        {
            type: 'input',
            name: 'usageAltText',
            message: 'Screenshots Alt text',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators',
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'Choose an open source license',
            choices: ['MIT License', 'GNU General Public License v3.0', 'GNU Affero General Public License v3.0'],
        },
        {
            type: 'input',
            name: 'licensesYear',
            message: 'Type in the Current Year',
        },
        {
            type: 'input',
            name: 'licensesFullName',
            message: 'Type in your Full Name',
        },
        {
            type: 'input',
            name: 'features',
            message: 'List your Projects Features',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'provide examples on how to test run your project',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Do you have any questions?',
        },
    ])
    .then((data) => {
        // split(' ') identifies space in the input and  join('') repmoves the spaces. So we do not have spaces in the file name.
        console.log(data.yourProjectTitle);
        
        const filename = `${data.yourProjectTitle.split(' ').join('')}.json`;
        fs.writeFile(filename, generateMarkdownInfo.generateMarkdown(), (err) =>
        err ? console.log(err) : console.log('Success!')
        );
    });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
