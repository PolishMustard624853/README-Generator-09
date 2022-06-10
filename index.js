const inquirer = require('inquirer');
const fs = require('fs');


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
      message:
        'Please explain how user would install necessary components for the project.',
      name: 'installation',
    },
    {
    type: 'input',
    message:
        'Please provide your tests for the project, and give an eplaination on how to run the test.',
    name: 'tests',
    },
    {
      type: 'list',
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
      message: 'Please provide your email address.',
      name: 'email',
    },
  ])

  .then((response) => {
    fs.writeFile(
    'README.md',
`# ${response.title}
    
## Table of Contents
    
1. [Description](#Description)
2. [Usage](#Usage)
3. [Installation](#Installation)
3. [Tests](#Tests)
2. [License](#License)
2. [Contribute](#Contribute)
2. [GitHub](#GitHub)
2. [Repository](#Repository)
2. [Email](#Email)


## Description
${response.description}

## Usage

${response.usage}

## Installation

${response.installation}

## Tests

${response.tests}

## License

${licenseId(response.license)}

## Contribute

${response.contribute}

## GitHub

${response.gitHub}

## Repository

${response.repository}

## Email

${response.email}`,

        (err) =>
          err
            ? console.error(err)
            : console.log('Your README has been successfully generated.')
      );
  });


function licenseId(license) {
    let sourceImg = '';
  if (license === 'MIT') {
    sourceImg =
      '![license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)';
  } else if (license === 'GNU GPL v3') {
    sourceImg =
      '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'Apache 2.0') {
    sourceImg =
      '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else {
    sourceImg = '';
  }
  return sourceImg;
};

