// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

let draftTable = `## Table of Contents`;

if (userResponse.usage !== '') {draftTable += `* [Installation](#installation)` };

if (userResponses.contributing !== '') { draftTable += `* [contributing](#contributing)` };

if (userResponses.tests !== '') { draftTable += `* [Tests](#tests)` };

let draftMarkdown = `# ${userResponses.title} ![Badge for GitHub](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repository}?style=flat&logo=appveyor)

## Description


${userResponses.description}
`



