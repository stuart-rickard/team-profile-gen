const { Manager, NonManager } = require ('./Staff');

class Team {
    constructor () {
        this.staff = [];
    }

    getTeamMembers() {
        this.staff.push( new Manager.procureManagerDetails() ) )
        .then while moreStaff {
            this.staff.push( new NonManager.procureNonManagerDetails )
        }
        return this.staff;
    }
}

