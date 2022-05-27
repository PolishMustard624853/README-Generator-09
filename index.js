// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
let sourceImg = '';
let license = '';
// const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
    { 
        type: 'input',
        message: 'Please enter the title of your project.',
        name: 'title',
    },
    {   
        type: 'input',
        message: 'Please enter a description of your project.',
        name: 'description',
    },
    {   
        type: 'input',
        message: 'Please enter project instructions.',
        name: 'usage',
    },
    {   
        type: 'input',
        message: 'Please explain how user would install necessary components for the project.',
        name: 'installation',
    },
    {   
        type: 'input',
        message: 'Please choose your license for this project.',
        choices: ['MIT', 'GNU GPL v3', 'Apache 2.0'],
        name: 'license',
    },
    {   
        type: 'input',
        message: 'Please state any contribution guidlines',
        name: 'contribute',
    },
    {   
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'gitHub',
    },
    {   
        type: 'input',
        message: 'Please enter the name of your GitHub repository.',
        name: 'repository',
    },
    {   
        type: 'input',
        message: 'Please provide your tests for the project, and give an eplaination on how to run the test.',
        name: 'tests',
    },
    {   
        type: 'input',
        message: 'Please provide your email address.',
        name: 'email',
    },
])



.then((response) => {
    licenseId(response.license),
    fs.writeFile('README.md', `${response.title}
    ${licenseId(license)}

    ## Table of Contents

    --(#Installation)
    --(#Usage)
    --(#Tests)
    --(#Contributions)
    --(#License)
    --(#Questions)

    ## Description
    ${description}

    ## Installation

    ${install}

    ## Usage

    ${usage}

    ## Tests

    ${tests}

    ## Contributions

    ${contribute}

    ## Questions

    ## GitHub
    
    ${response.gitHub}

    ## Email

    ${response.email}`,
    
    (err) => (err ? console.error(err) : console.log("Your README has been successfully generated.")))
});
// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function licenseId(license) {
    if (licenseId === 'MIT') {
        sourceImg = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (licenseId === 'GNU GPL v3') {
        sourceImg = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else if (licenseId === 'Avalanche 2.0') {
        sourceImg = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
}

// Function call to initialize app
// init();

