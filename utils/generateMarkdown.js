
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown(license) {
  if (license !== "None") {
    return '[License]($(license))'
  } if (license === "MIT") {
    return '[License]($(license))'
  } if (license === "ISC"){
    return '[License]($(license))'
  } if (license === "Mozilla"){
    return '[License]($(license))'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    
  if (license === 'None'){
    return `\n *[License](#) \n`
  } if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } if (license === "Mozilla"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

  }if (license === "ISC"){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License
      This project is licensed under the ${license} license
    `
  }if (license !== ''){
    alert("Please select a license")
  }
}

module.exports = generateMarkdown;