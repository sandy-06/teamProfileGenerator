

const generateTeam = team => {

    const generateManager = Manager => {
        return `
      <<div class="card" "col-3">
      
      <div class="card-body bg-primary">
        <h3 class="card-title text-white">${Manager.getName()}</h3>
        <p class="card-text text-white"><i class="fas fa-mug-hot"></i>${Manager.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID  ${Manager.getId()}</li>
        <li class="list-group-item">email  ${Manager.getEmail()}</li>
        <li class="list-group-item">Office Number ${Manager.getOfficeNumber()}</li>
      </ul>
      
    </div>`

    };

    const generateEngineer = Engineer => {
        return `
      <<div class="card" "col-3">
      
      <div class="card-body bg-primary ">
        <h3 class="card-title text-white">${Engineer.getName()}</h3>
        <p class="text-white"><i class="fas fa-glasses"></i>${Engineer.getRole()}</p>
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
      <<div class="card" "col-3" >
     
      <div class="card-body">
        <h5 class="card-title">${Intern.getName()}</h5>
        <p class="card-text"><i class="fas fa-user-graduate"></i></i>${Intern.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${Intern.getId()}</li>
        <li class="list-group-item">${Intern.getEmail()}</li>
        <li class="list-group-item">${Intern.getSchool()}</li>
      </ul>
      
    </div>`

    };
    const html = [];

    html.push(team.filter(item => item.getRole() === "Manager").map(manager => generateManager(manager)));

    html.push(team.filter(item => item.getRole() === "Engineer").map(engineer => generateEngineer(engineer)));

    html.push(team.filter(item => item.getRole() === "Intern").map(intern => generateIntern(intern)));



    return html.join('');
}







function generateTeamPage(team) {

    return `
        < !DOCTYPE html >
            <html lang="en">

                <head>
                    <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                <title>Portfolio Demo</title>
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                                    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
                                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> 
                                        <link rel="stylesheet" href="style.css">
                                        </head>

                                        <body>
                                            <header>
                                                <div class="container bg-danger text-light ">
                                                    <h1 class="justify-center">My Team</h1>

                                                </div>
                                            </header>
                                            
                                            <main class="container my-5">
                                                <div class= "row justify-content-around mx-3">

                                                 ${generateTeam(team)} 
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
                            `;

}
module.exports = generateTeamPage;
