function renderLicenseBadge(license) {
  if (license !== "None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n\n[License](https://opensource.org/licenses/${license})\n`;
  }
  return "";
}

function renderLicenseSection(license) {
  if(license !== "None"){
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
- [Description](#description)
- [Author](#author)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}


## Author
${data.author}

## Installation
To install necessary dependencies, run the following command(s):
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}


${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)} ${renderLicenseBadge(data.license)}

## Contributing
${data.contribution}

## Tests
To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}).


`;
}

module.exports = generateMarkdown;
