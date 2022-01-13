const inquirer = require('inquirer');

const askUserFor = function( request ) {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'response',
                message: `Please provide ${request}.`,
                validate: response => {
                if (response) {
                    return true;
                } else {
                    console.log('Please enter a valid response.');
                    return false;
                }}
            },
        ])
        .then(function(result){
            console.log("inside askUserFor",result.response);

return result.response;
        })

    }  
    
const askUserForEmail = function( request ) {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'response',
                message: `Please provide ${request}.`,
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
        ])
        .then(function(result){
            console.log("inside askUserFor",result.response);

return result.response;
        })

    }  
        
const askUserToSelect = function( request, choices ) {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: `Please select ${request}.`,
                name: 'selection',
                choices: choices,
            },
        ])
    }  
            
module.exports = {
    askUserFor,
    askUserForEmail,
    askUserToSelect,
}