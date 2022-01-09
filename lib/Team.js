const { getManager, getTeamMembers } = require ('./Staff');

class Team {
    constructor () {
        this.staff = [];
    }

    getTeamMembers() {
        this.staff.push( new Manager.procureManagerDetails() ) )
        .then while moreStaff {
            this.staff.push( new nonManager.procureNonManagerDetails )
        }
        return this.staff;
    }
}

