const managerGenerator = function (manager) {
    return `
      <div class="card col-5 col-sm-5 col-lg-3 p-0">
        <h3 class="card-header text-center manager">
          Manager <br />
          ${manager.name}
        </h3>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${manager.id}</li>
            <li class="list-group-item">Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number:${manager.officeNumber}</li>
          </ul>
        </div>
      </div>
    `;
}

// create Engineer card
const generateEngineer = function (engineer) {
  return `
  <!-- Engineer Card -->
      <div class="card col-5 col-sm-5 col-lg-3 p-0">
        <h3 class="card-header text-center engineer">
          Engineer <br />
          ${engineer.name}
        </h3>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${engineer.id}</li>
            <li class="list-group-item">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub:${engineer.github}</li>
          </ul>
        </div>
      </div>
  `
}

// create Intern card 
const generateIntern = function (intern) {
  return `
  <!-- Intern Card -->
      <div class="card col-5 col-sm-5 col-lg-3 p-0">
        <h3 class="card-header text-center intern">
          Intern <br />
          ${intern.name}
        </h3>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${intern.id}</li>
            <li class="list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School:${intern.school}</li>
          </ul>
        </div>
      </div>
  `
};


HTMLGenerator = (info) => {

    fullTeam = [];

    for (let i = 0; i < info.length; i++) {
        const employee = info[i];
        const role = employee.getRole();

        if(role === 'Manager'){
            const managerInfo = managerGenerator(employee);
            fullTeam.push(managerInfo);
        }
        // call engineer function
        if (role === 'Engineer') {
          const engInfo = generateEngineer(employee);

          fullTeam.push(engInfo);
      }

      // call intern function 
      if (role === 'Intern') {
          const internInfo = generateIntern(employee);

          fullTeam.push(internInfo);
      }
    }

    const allEmployeesInfo = fullTeam.join('');

    const TeamGen = genTeam(allEmployeesInfo);
    return TeamGen;
}

const genTeam = function (allEmployeesInfo) {
    return`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
      rel="stylesheet"
    />
  </head>
  <header>My Team</header>
  <!-- Manager Card -->
  <div class="container mt-4">
  <div
      style="height: 300px"
      class="row justify-content-center align-items-center gap-3"
    >
    ${allEmployeesInfo}
    </div>
    <!-- Container div ends here -->
  </div>
  <body>
    <!-- Bootstrap script starts here -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
    ` 
};

module.exports = HTMLGenerator; 