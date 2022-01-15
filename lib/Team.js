const { Manager, NonManager } = require ('./Staff');
const { askUserFor, askUserForEmail, askUserToSelect, askUserToConfirm } = require( './obtain-user-input' );

class Team {
    constructor () {
        this.staff = [];
    }

        //     getTeamMembers() {
    async populateStaff() {
        const manager = new Manager;
        await manager.populateDetails();
        this.staff.push( manager );
        // await console.log( askUserToConfirm( 'to add another staff' ) );
        let wantToAdd = await askUserToConfirm( 'Add another staff?' );
        while ( wantToAdd ) {
            const nonManager = new NonManager;
            await nonManager.populateDetails()
            this.staff.push( nonManager );
            wantToAdd = await askUserToConfirm( 'Add another staff?' );
        }
        // return this.staff;
    }
//         const member = new Manager;
//         manager.procureNonManagerDetails();
//         this.staff.push( manager )
        
//         .then while moreStaff {
//             this.staff.push( new NonManager.procureNonManagerDetails )
//         }
//         return this.staff;
//     }
}

        // const member = new Manager;
        // console.log(member);
module.exports = Team;