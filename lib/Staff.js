const { askUserFor, askUserForEmail, askUserToSelect } = require( './obtain-user-input' );


// askUserFor('manager name')
// .then( () => askUserForEmail('dohadhoas')
// );


class Staff {
    constructor() {
        this.name = '';
        this.employeeID = '';
        this.email = '';
        this.role = '';
    }
}

class Manager extends Staff {
    constructor() {
        super();
        this.officeNumber = '';
        this.role = 'Manager';
    }

    procureManagerDetails() {
        this.name = askUserFor('manager name')
        // .then( () => this.employeeID = askUserFor('manager employee ID'));
        // this.email = askUserForEmail('manager email address');
        // this.officeNumber =askUserFor('manager office number');
    }
}

// class NonManager extends Staff {
//     constructor() {
//         super();
//         this.githubUserName = '';
//         this.school = '';
//     }

//     procureNonManagerDetails() {
//         this.role = askUserToSelect ( 'staff role', [ 'Engineer', 'Intern' ] );
//         this.name = askUserFor( this.role.toLowerCase + '\'s name');
//         this.employeeID = askUserFor( this.role.toLowerCase + '\'s employee ID');
//         this.email = askUserForEmail( this.role.toLowerCase + '\'s email address');
//         case this.role {
//             'Engineer': {
//                 this.githubUserName = askUserFor('manager office number');
//             },
//             'Intern': {
//                 this.school = askUserFor( this.role.toLowerCase + '\'s school' );
//             }
//         }
        
//         ;
//     }
// }

manager = new Manager;
console.log(manager);
addDetails = function(manager) {
    let manager2 = manager;
    manager2.procureManagerDetails();
}
.then( () => console.log(manager);
)
// console.log(manager.procureManagerDetails)
// manager2 = manager.procureManagerDetails();
// console.log(manager2);
addDetails(manager);
// console.log(manager);



// module.exports = {
//     Manager,
//     NonManager
// }