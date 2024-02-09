// Including packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateLogo = require('./lib/generateLogo');
const fileName ='logo.svg';

// This is an array of questions, each question stores a type, message, and name
const questions = [{
    type: 'input',
    message: 'Please enter the text for your logo (it cannot exceed 3 letters):',
    name: 'text'
},
{
    type: 'input',
    message: 'Please aaaaaaaaaaaa:',
    name: 'text-colour'
},
{
    type: 'input',
    message: 'Please choose a shape for you logo from the list below:',
    name: 'shape'
},
{
    type: 'input',
    message: 'Please aaaaaaaaaaaaaaaaaa:',
    name: 'shape-colour'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, logoContent) { 
    fs.writeFile(fileName, logoContent, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg"));
}

// TODO: Create a function to initialize app
function init() {
    /* The line below stores the questions that the user will see */
    inquirer.prompt(questions)

        .then((answers) => {
            // Using user feedback from .prompt to create a readme file
            const logoContent = generateLogo(answers);
            writeToFile(fileName, logoContent);
        })
        .catch((error) => {
            // Prompt couldn't be rendered in the current environment
            if (error.isTtyError) {
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();