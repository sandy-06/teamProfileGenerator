const inquirer = require('inquirer');
const fs = require('fs');
//page creation
const generateHTML = require('./src/generateHTML');
//team
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { listenerCount } = require('process');
//team array
const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'fullName',
            message: 'What is the manager of this teams full name?',
            validate: fullNameInput => {
                if (fullNameInput) {
                    return true;
                } else {
                    console.log('Please enter your full name!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your employee id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your employee id!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your officeNumber?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your officeNumber!');
                    return false;
                }
            }
        }
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);

        })
}
const addEmployee = () => {
   return inquirer.prompt([
       {
        type: 'list',
        name: 'role',
        choices: ['Engineer', 'Intern'],
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log('Please pick a type of employee!')
                return false;
            }
        }

       },
       {
           type:'input',
       }

    ])
    





