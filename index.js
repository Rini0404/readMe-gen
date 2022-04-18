// TODO: Include packages needed for this application
const markdown = require('generateMarkdown')




const readMeF = (answers) => {`
  ##Title of Project: 
    ${answers.title} 
  ##Table of Content
    [Title](#title)
    [Description](#description)0
    [Deplpoyed Picture](#picture)
    [My Repo](#repo)
    [Live Link](#live)
    [Instillation](#installition)
    [Your Steps](#steps)
    [Used Languages](#languages)
    [Contributers to the project](#contributors)
    [Future Plans](#future)
    [Licenses](#license)
    [Badgesbadges](#)

`; 

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
      name:'steps',
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
    },
    { 
      type:'input',
      name:'badges',
      question:`What badges did you get?`
    },
  ])
}