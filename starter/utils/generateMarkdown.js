// function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
    
  ## Questions
  If you have any questions, get in touch with me at: ${data.email}
`;
}

function generateLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache-2.0') {
    return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL-3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD-3-Clause') {
    return '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return ''; // No badge for 'None' or unknown license
  }
}

function generateLicenseNotice(license) {
  if (license === 'None') {
    return 'This project is not licensed.';
  } else {
    return `This project is licensed under the [${license}](https://opensource.org/licenses/${license}) license.`;
  }
}

module.exports = generateMarkdown;
