const { askUserFor, askUserForEmail, askUserToSelect } = require( './obtain-user-input' );

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

    async populateDetails() {
        this.name = await askUserFor( 'manager name' );
        this.employeeID = await askUserFor( 'manager employee ID' );
        this.email = await askUserForEmail( 'manager email address' );
        this.officeNumber = await askUserFor( 'manager office number' );
    }
}

class NonManager extends Staff {
    constructor() {
        super();
        //  do we need these next lines??
        this.githubUserName = '';
        this.school = '';
    }

    async populateDetails() {
        this.role = await askUserToSelect ( 'staff role', [ 'Engineer', 'Intern' ] );
        this.name = await askUserFor( this.role.toLowerCase() + '\'s name');
        this.employeeID = await askUserFor( this.role.toLowerCase() + '\'s employee ID');
        this.email = await askUserForEmail( this.role.toLowerCase() + '\'s email address');
        switch( this.role ){
            case 'Engineer': {
                this.githubUserName = await askUserFor('manager office number');
                break;
            }
            case 'Intern': {
                this.school = await askUserFor( this.role.toLowerCase() + '\'s school' );
                break;
            }
        }
    }
}

module.exports = {
    Manager,
    NonManager
}