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
    }

    procureNonManagerDetails() {
        this.role = 'Manager';
        this.name = askUserFor('manager name');
        this.employeeID = askUserFor('manager employee ID');
        this.email = askUserForEmail('manager email address');
        this.officeNumber =askUserFor('manager office number');
    }
}

class NonManager extends Staff {
    constructor() {
        super();
        this.githubUserName = '';
        this.school = '';
    }

    procureNonManagerDetails() {
        this.role = askUserToSelect ( [ 'Engineer', 'Intern' ] );
        this.name = askUserFor( this.role.toLowerCase + '\'s name');
        this.employeeID = askUserFor( this.role.toLowerCase + '\'s employee ID');
        this.email = askUserForEmail( this.role.toLowerCase + '\'s email address');
        case this.role {
            'Engineer': {
                this.githubUserName = askUserFor('manager office number');
            },
            'Intern': {
                this.school = askUserFor( this.role.toLowerCase + '\'s school' );
            }
        }
        
        ;
    }
}


module.exports = {
    Manager,
    NonManager
}