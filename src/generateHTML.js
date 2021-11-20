

const generateTeam = team => {

const generateManager = Manager => {
    return `
      <<div class="card" "col-4">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${Manager.getName()}</h5>
        <p class="card-text"><i class="fas fa-mug-hot"></i>${Manager.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${Manager.getId()}</li>
        <li class="list-group-item">${Manager.getEmail()}</li>
        <li class="list-group-item">${Manager.getOfficeNumber()}</li>
      </ul>
      
    </div>`

};
          
const generateEngineer = Engineer => {
    return `
      <<div class="card" "col-4">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${Engineer.getName()}</h5>
        <p class="card-text"><i class="fas fa-mug-hot"></i>${Engineer.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${Engineer.getId()}</li>
        <li class="list-group-item">${Engineer.getEmail()}</li>
        <li class="list-group-item">${Engineer.getGithub()}</li>
      </ul>
      
    </div>`

}; 
        
const generateIntern = Intern => {
    return `
      <<div class="card" "col-4">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${Intern.getName()}</h5>
        <p class="card-text"><i class="fas fa-mug-hot"></i>${Intern.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${Intern.getId()}</li>
        <li class="list-group-item">${Intern.getEmail()}</li>
        <li class="list-group-item">${Intern.getSchool()}</li>
      </ul>
      
    </div>`

}; 
const html = [];
html.push(team.filter(item => item.getRole() === "Engineer").map(engineer => generateEngineer(engineer))  );

  html.push(team.filter(item => item.getRole() === "Manager").map(manager => generateManager(manager))  );


    html.push(team.filter(item => item.getRole() === "Intern").map(intern => generateIntern(intern))  );



  return html.join('');
}







function generateTeamPage(team) {

    return`
        < !DOCTYPE html >
            <html lang="en">

                <head>
                    <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                <title>Portfolio Demo</title>
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                                    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                                        <link rel="stylesheet" href="style.css">
                                        </head>

                                        <body>
                                            <header>
                                                <div class="container flex-row justify-space-between align-center py-3">
                                                    <h1 class="pate-title text-secondary .bg-danger .text-light py-2 px-3">My Team</h1>

                                                </div>
                                            </header>
                                            <main class="container my-5">
                                            ${generateTeam(team)} 
                                            </main>

                                        </body>

                                    </html>
                            `;

}
                                    module.exports = generateTeamPage;
