const HTMLGenerator = require('./src/teamGenerator');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const myTeam = []; 

const managerInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your team´s Manager: ',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your Manager´s ID: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Manager´s email: ',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your Manager´s Office Number: ',
        },
    ])
    .then(response => {
        const {name, id, email, officeNumber} = response;
        const manager = new Manager (name, id, email, officeNumber);

        console.log(manager)
        myTeam.push(manager);
    })
};

const addEmployee = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'addTeamMembers',
            message: 'Is there more people on your team?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        myTeam.push(employee); 

        if (addTeamMembers) {
            return addEmployee(myTeam); 
        } else {
            return myTeam;
        }
    })

};

//Write File using FS library

const writeFile = data => {
    fs.writeFile('./dist/myteam.html', data, err => {
        if(err){
            console.log(err);
        }else{
            console.log('Your Team has been successfully created!');
        }
    })
};


managerInput()
.then(addEmployee)
.then(myTeam => {
    return HTMLGenerator(myTeam);
})
.then(generated => {
    return writeFile(generated);
})
.catch(err => {
    console.log(err);
});