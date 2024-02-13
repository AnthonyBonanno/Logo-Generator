// Including packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateLogo = require('./lib/generateLogo');
const fileName = 'examples/logo.svg';

// This is an array of prompts, each prompt stores a type, message, and name
const prompts = [{
    type: 'input',
    message: 'Please enter the text for your logo (it cannot exceed 3 characters):',
    name: 'text',
    validate: function (input) {
        if (input.length > 3) {
            return 'The text for your logo cannot exceed 3 characters!';
        } else {
            return true;
        }
    }
},
{
    type: 'list',
    message: 'Please enter a hexadecimal number for the colour of your text:',
    name: 'textColour',
    choices: ['Red', 'Green', 'Blue']
},
{
    type: 'list',
    message: 'Please choose a shape for you logo from the list below:',
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square']
},
{
    type: 'list',
    message: 'Please enter a hexadecimal number for the colour of your shape:',
    name: 'shapeColour',
    choices: ['Purple', 'Yellow', 'Orange']
}];

// TODO: Create a function to write README file
function writeToFile(fileName, logoContent) {
    fs.writeFile(fileName, logoContent, (err) =>
        err ? console.log(err) : console.log("Generated logo.svg"));
}

// TODO: Create a function to initialize app
function init() {
    /* The line below stores the prompts that the user will see */
    inquirer.prompt(prompts)

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