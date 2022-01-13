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

   async  procureManagerDetails() {
        // this.name = "bill"
        this.name = await askUserFor('manager name')
        // this.name = 'hi'
        // .then(function(){
        //    return this.name;

        // });
        this.employeeID = await askUserFor('manager employee ID')
        this.email = await askUserForEmail('manager email address');
        this.officeNumber = await askUserFor('manager office number');
    }
}


class NonManager extends Staff {
    constructor() {
        super();
        this.githubUserName = '';
        this.school = '';
    }

    async procureNonManagerDetails() {
        this.role = await askUserToSelect ( 'staff role', [ 'Engineer', 'Intern' ] );
        this.name = await askUserFor( this.role.toLowerCase + '\'s name');
        this.employeeID = await askUserFor( this.role.toLowerCase + '\'s employee ID');
        this.email = await askUserForEmail( this.role.toLowerCase + '\'s email address');
        switch( this.role ){
            case 'Engineer': {
                this.githubUserName = await askUserFor('manager office number');
                break;
            }
            case 'Intern': {
                this.school = await askUserFor( this.role.toLowerCase + '\'s school' );
                break;
            }
        }
        
        ;
    }
}


 async function addDetails (person) {

    // if (person.role == "Manager" ){
    //     await manager.procureManagerDetails()

    // }p
  
    await person.procureNonManagerDetails()
    // .then( (response) => console.log("hello"));
}



// const manager = new Manager;


//  addDetails(manager);

 const nonManager = new NonManager;


 addDetails(nonManager);






// module.exports = {
//     Manager,
//     NonManager
// }