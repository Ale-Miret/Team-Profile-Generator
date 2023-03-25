const inquirer = require('inquirer');
const fs = require('fs');

const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const inserttHTML = require('./src/htmlCreator');

const Questions = async () => {
  const teamArray = [];

  const questionPrompt = async () => {
    const employeeInput = await inquirer.prompt([
      {
        name: 'name',
        message: 'Please enter your name',
        type: 'input',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
          }
        },
      },
      {
        name: 'id',
        message: 'Please enter your employee id',
        type: 'input',
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter your employee id!');
          }
        },
      },
      {
        name: 'email',
        message: 'Please enter your your email',
        type: 'input',
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your your email!');
          }
        },
      },
      {
        type: 'list',
        name: 'role',
        choices: ['Engineer', 'Intern', 'Manager'],
      },
      {
        name: 'github',
        type: 'input',
        message: 'Please enter your GitHub username?',
        when: (input) => input.role === 'Engineer',
      },
      {
        type: 'input',
        name: 'school',
        message: 'Which school do you attend?',
        when: (input) => input.role === 'Intern',
      },
      {
        type: 'input',
        name: 'officeNum',
        message: 'What is your office number?',
        when: (input) => input.role === 'Manager',
      },
      {
        type: 'confirm',
        name: 'more',
        message: 'Would you like to add more team members?',
      },
    ]);

    const { name, id, email, role, github, school, officeNum, more } =
      employeeInput;
    let employee;

    if (role === 'Engineer') {
      employee = new Engineer(name, id, email, github);
    } else if (role === 'Intern') {
      employee = new Intern(name, id, email, school);
    } else if (role === 'Manager') {
      employee = new Manager(name, id, email, officeNum);
    }

    teamArray.push(employee);

    if (more) {
      return questionPrompt();
    } else {
      return teamArray;
    }
  };

  return questionPrompt();
};

const writeFile = (data) => {
  fs.writeFile('./dist/index.html', data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File Written!');
    }
  });
};

Questions()
  .then(function (teamArray) {
    return insertHTML(teamArray);
  })
  .then(function (writeHtml) {
    return writeFile(writeHtml);
  })
  .catch(function (err) {
    console.log(err);
  });
