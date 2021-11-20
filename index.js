const inquirer = require('inquirer');
const fs = require('fs');
//page creation
const generateTeamPage = require('./src/generateHTML');
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
            name: 'name',
            message: 'What is the manager of this teams full name?',
            validate: nameInput => {
                if (nameInput) {
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
            addEmployee();
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
            type: 'input',
            name: 'name',
            message: "Please add employee's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter name of employee!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter employee company id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter employee company Id!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter employee email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter employees github username.',
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the name of the interns school.',
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;

                } else {
                    console.log('Please enter school name!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, github, school, confirmAddEmployee} = employeeData;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, id , email, github);
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);

        }
      
    teamArray.push(employee);
    if (confirmAddEmployee) {
         addEmployee(teamArray);
    } else {
        console.log(teamArray)
        const teamPage = generateTeamPage(teamArray)
        fs.writeFile('./dist/index.html', teamPage, () =>{
            console.log('done');
        })

    }
})
}

addManager()
//generate html




