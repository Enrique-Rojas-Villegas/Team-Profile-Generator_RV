const HTMLGenerator = require('./src/teamGenerator');

//We require the classes were goint to be using, since we will declare new objects off these classes. 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Neccesary libraries to rewrite files and to ask terminal questions. 
const fs = require('fs');
const inquirer = require('inquirer');

//Declared an empty array so after the questions of each member are done, the object is pushe to this array. 
const myTeam = []; 

// We create a function which will make the questions for the Manager input
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
    // We get a promise and destructure these input to create our new manager object. 
    .then(response => {
        const {name, id, email, officeNumber} = response;
        const manager = new Manager (name, id, email, officeNumber);

        //console.log(manager)
        //Here we push our new object created to our empty array
        myTeam.push(manager);
    })
};

//this function asks the questions for the engineer and intern depending on the option chosen by the user. 
const addEmployee = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose the type of member to add: ",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the name: ", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the corresponding ID: ",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the corresponding email: ",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the associated GitHub User: ",
            //We check if the role is the same as the one selected, the we prompt for a github user. 
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter where school you are from: ",
            //If it matches the intern role, the we prompt for a school instead of github
            when: (input) => input.role === "Intern",
        },
        {
            //This bascally asks again if we want to add another team member and asks the questions again. 
            type: 'confirm',
            name: 'addTeamMembers',
            message: 'Is there more people on your team?',
            default: false
        }
    ])
    .then(response => { 
        //we also get a rpomise and destructure these data as well.

        let { name, id, email, role, github, school, addTeamMembers } = response; 
        let employee; 

        //We check the roles and based on that, we create our new object of the corresponding class. And assign the correct properties. 
        //we the push that team member to our array, but sending our previus data, so the manager is saved. 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }

        myTeam.push(employee); 

        //This if checks if the prompt of addign new team members is true and to ask or not the questions again. 
        if (addTeamMembers) {
            return addEmployee(myTeam); 
        } else {
            return myTeam;
        }
    })

};

//Write File using FS library
//we use this to declare were our file will be located once created, and a message. 

const writeFile = data => {
    fs.writeFile('./dist/myteam.html', data, err => {
        if(err){
            console.log(err);
        }else{
            console.log('Your Team has been successfully created!');
        }
    })
};

//we call our manager function at the beginning to do first
//We then call a promise if another member is added
//Another promise to call our generator found in the TeamGenerator file. 
//Another promise to call the file Generation declared in line 129
//We catch any errors
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