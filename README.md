gitHub link https://github.com/sandy-06/teamProfileGenerator

# 10 Object-Oriented Programming: Team Profile Generator

Your challenge is to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Because testing is key to making code maintainable, you’ll also write unit tests for each part of your code and ensure that it passes all of them.

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video **and** add it to the README of your project.

**Note**: There is no starter code for this assignment.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Mock-Up

The following image shows the generated HTML’s appearance and functionality. The styling in the image is just an example, so feel free to add your own styles:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/10-object-oriented-programming-homework-demo.png)


## Getting Started

This Challenge will combine many of the skills you’ve learned over the first ten weeks of this course. To help you get started, we’ve provided some guidelines in addition to the User Story and Acceptance Criteria.

Your application should use [Jest](https://www.npmjs.com/package/jest) to run the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) to collect input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

It is recommended that you start with a directory structure that looks like this:

```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet
├── lib/                   // classes
├── src/                   // template helper code
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json
```

**Important**: Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.

The application must have these classes: `Employee`, `Manager`, `Engineer`, and `Intern`. The tests for these classes (in the `_tests_` directory) **must all pass**.

The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`   // Returns 'Employee'

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have:

* `officeNumber`

* `getRole()`   // Overridden to return `Manager`

In addition to `Employee`'s properties and methods, `Engineer` will also have:

* `github`  // GitHub username

* `getGithub()`

* `getRole()`   // Overridden to return `Engineer`

In addition to `Employee`'s properties and methods, `Intern` will also have:

* `school`

* `getSchool()`

* `getRole()`   // Overridden to return `Intern`

Finally, although it’s not a requirement, you should consider adding validation to ensure that the user input provided is in the proper expected format.


## Review

You are required to submit the following for review:

* A walkthrough video demonstrating the functionality of the application and passing tests.

* A sample HTML file generated using your application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
# contributing
Sandra Sanders
# useage
can only be run using node.js commands
video link 
# installation 
html file generated

        <!DOCTYPE html>
            <html lang="en">

                <head>
                    <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                <title>My Team</title>
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                                    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
                                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> 
                                        <link rel="stylesheet" href="style.css">
                                        </head>

                                        <body>
                                            <header>
                                                <div class="container bg-danger text-light ">
                                                <br>
                                                    <h1 class="justify-center">My Team</h1>
                                                    <br>
                                                </div>
                                            </header>
                                            
                                            <main class="container my-5">
                                                <div class= "row justify-content-around mx-3">

                                                 
      <div class="card" "col-3">
      
      <div class="card-body bg-primary">
        <h3 class="card-title text-white">Sandra</h3>
        <p class="card-text text-white"><i class="fas fa-mug-hot"></i>Manager</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID  123</li>
        <li class="list-group-item">email  sandra@thisco.com</li>
        <li class="list-group-item">Office Number 1</li>
      </ul>
      
    </div>
      <div class="card" "col-3">
      
      <div class="card-body bg-primary ">
        <h3 class="card-title text-white">Bradely</h3>
        <p class="text-white"><i class="fas fa-glasses"></i>Engineer</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">245</li>
        <li class="list-group-item">bradely@thisco.com</li>
        <li class="list-group-item">bradely-06</li>
      </ul>
      
    </div>,
      <div class="card" "col-3">
      
      <div class="card-body bg-primary ">
        <h3 class="card-title text-white">James</h3>
        <p class="text-white"><i class="fas fa-glasses"></i>Engineer</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">245</li>
        <li class="list-group-item">James@thisco.com</li>
        <li class="list-group-item">james-98</li>
      </ul>
      
    </div>,
      <div class="card" "col-3">
      
      <div class="card-body bg-primary ">
        <h3 class="card-title text-white">April</h3>
        <p class="text-white"><i class="fas fa-glasses"></i>Engineer</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">345</li>
        <li class="list-group-item">april@thisco.com</li>
        <li class="list-group-item">april-198</li>
      </ul>
      
    </div>
      <div class="card" "col-3" >
     
      <div class="card-body bg-primary">
        <h3 class="card-title text-white">Carlos</h3>
        <p class="card-text text-white"><i class="fas fa-user-graduate"></i></i>Intern</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">456</li>
        <li class="list-group-item">carlos@thisco.com</li>
        <li class="list-group-item">Gonzaga</li>
      </ul>
      
    </div> 
                                                </div>
                                            </main>

                                        </body>
                                        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                                        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
                                        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
                                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js"></script>
                                        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
                                        <script src="./assets/js/script.js"></script>

                                    </html>
                            
