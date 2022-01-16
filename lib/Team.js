const { Manager, NonManager } = require ('./Staff');
const { askUserToConfirm } = require( './obtain-user-input' );

class Team {
    constructor () {
        this.staff = [];
    }

    async populateStaff() {
        const manager = new Manager;
        await manager.populateDetails();
        this.staff.push( manager );
    
        let wantToAdd = await askUserToConfirm( 'Add another staff?' );
        while ( wantToAdd ) {
            const nonManager = new NonManager;
            await nonManager.populateDetails()
            this.staff.push( nonManager );
            wantToAdd = await askUserToConfirm( 'Add another staff?' );
        }
    }
}

module.exports = Team;