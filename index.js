// TODO: Include packages needed for this application
const markdown = require('generateMarkdown')




const readMeF = (answers) => 

// using inquirer 
  inquirer
  .propmt([
    { 
      type:'input',
      name:'title',
      question:'What is the name of your Project?'
    },
    { 
      type:'input',
      name:'description',
      question:'Give a simple description of your Project, in your own words.'
    },
    { 
      type:'input',
      name:'picture',
      question:'Please add a picture to this file, of your finished project.'
    },
    { 
      type:'input',
      name:'repo',
      question:'Please enter your gitHub repo link.'
    },
    { 
      type:'input',
      name:'live',
      question:'Enter your live URL to your project.'
    },
    { 
      type:'input',
      name:'installition',
      question:'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    { 
      type:'input',
      name:'usage',
      question:'What is a step by step guide?'
    },
    { 
      type:'input',
      name:'languages',
      question:'What are some of the languages you used for this project?'
    },
    { 
      type:'input',
      name:'contributors',
      question:'If anyone helped, who did?'
    },
    { 
      type:'input',
      name:'future',
      question:'Is there any future plans for this project?'
    },
    { 
      type:'list',
      name:'license',
      question:'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
      choices:['None', 'ISC', 'Mozilla', 'MIT']
    }
  ])

  ` ##Title of Project: 
    ${answers.title} 
  ##Table of Content
    [Title](#title)
    [Description](#description)
    [Deplpoyed Picture](#picture)
    [My Repo](#repo)
    [Live Link](#live)
    [Instillation](#installition)
    [Usage](#usage)
    [Languages](#languages)
    [Contributers to the project](#contributors)
    [Future](#future)
    [Licenses](#license)

  ## Title
  ${answers.title}
  ## Picture
  ${answers.picture}
  ## Description
  ${answers.description}
  ## My Repo
  [Repo](${answers.repo})
  ## Live Link
  ${answers.live}
  ## Instillation
  ${answers.instillation}
  ## Steps
  ${answers.usage}
  ## Languages
  ${answers.languages}
  ## Contributors to the project
  ${answers.contributors}
  ## Future
  ${answers.future}
  ## Licenses
  ${markdown.renderLicenseBadge(answers.license)}
  `

  .then((answers) => {
    const readMe = readMeF(answers); // readMe is now the answers 
    fs.writeFile('ReadMe.md', renderPage, err => 
      err ? console.log(err) : console.log('You have now made your Read ME file!')
    )}); 

