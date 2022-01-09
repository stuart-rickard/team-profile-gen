const inquirer = require('inquirer');

const obtainTeamInfo = function(){
    const intro = `Welcome to the Team Profile Generator!
Let's get started by entering information for the manager of the team!`;
    console.log(intro);
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'this is the first question',
            validate: managerName => {
            if (managerName) {
                return true;
            } else {
                console.log('Please enter the manager\'s name.');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the team manager\'s employee ID?',
            validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter the manager\'s ID.');
                return false;
            }}
        },
    ])
}

const obtainMoreInfo = function(){
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'another',
            message: 'this is from obtain more',
            validate: another => {
            if (another) {
                return true;
            } else {
                console.log('Please enter the manager\'s name.');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the team manager\'s employee ID?',
            validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter the manager\'s ID.');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team manager\'s email address?',
            validate: function (email) {  
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the team manager\'s office number?',
            validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter the manager\'s office number.');
                return false;
            }}
        },
        {
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['Attack', 'Use potion']
        },
    ])
}

module.exports = function (){
// obtainTeamInfo()
// .then( responses => {
//     console.log( responses );
//     return obtainMoreInfo()})
// .then( response2 => {
//     console.log( response2 );
    return 'done!';
}
// );
// }

