const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const licenseOptions = ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'];

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select license:',
        choices: licenseOptions,
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List of contributors:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Select license:',
    },
    {
        type: 'Input',
        name: 'email',
        message: 'Enter your email address:',
        validate: function(value) {
            // You can add custom validation for the email input
            const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            return valid || 'Please enter a valid email address.';
        },
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
    const generatedMarkdown = generateMarkdown(answers);
    const outputFileName = path.join(__dirname, "output", "README.md");

      // Ensure the output directory exists
    if (!fs.existsSync(path.dirname(outputFileName))) {
        fs.mkdirSync(path.dirname(outputFileName), { recursive: true });
    }

      // Write the generated README file
    writeToFile(outputFileName, generatedMarkdown);

    console.log('README.md successfully generated!');
    })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// function call to initialize program
init();
