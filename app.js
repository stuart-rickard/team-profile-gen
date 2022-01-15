const { createHTML, saveHTML } = require( './lib/html-handler' )
const Team = require( './lib/Team' );
const { askUserToSelect } = require( './lib/obtain-user-input' );

introMessage = () => {
    const intro = `Welcome to the Team Profile Generator!
Let's get started!`;
    console.log(intro);        
}

testData = [
    {
        name: "from app",
        employeeID: "456",
        role: "Manager",
        officeNumber: "789",
        email: 'sam@g.com'
    },
    {
        name: "tim",
        employeeID: '456',
        role: "Engineer",
        githubUserName: "tim-the-user",
        email: 'tim@g.com'
    },
    {
        name: "zelda",
        employeeID: "456",
        role: "Intern",
        school: 'columbia',
        email: 'ze@g.com'
    },
    {
        name: "ralph",
        employeeID: '456',
        role: "Engineer",
        githubUserName: 'ralph',
        email: 'ra@g.com'
    },
    {
        name: "toni",
        employeeID: '456',
        role: "Intern",
        school: 'berkeley',
        email: 'sam@g.com'
    },                                        
]

const createReport = async function() {
    introMessage();
    const team = new Team;
    await team.populateStaff();
        
        console.log( 'team is:' );
        console.log( team );
        console.log( 'team.staff is:');
        console.log( team.staff );
        console.log( team.staff[0].name )

    saveHTML( createHTML( team.staff ) ) 
        .then( writeFileResponse => {
            console.log( writeFileResponse.message );
        })
        
}

// makeReport = async function() {
//     const team = new Team;
//     team.populateStaff();
//     consoleLogging = function() {

//         console.log( 'team is:' );
//         console.log( team );
//         console.log( 'team.staff is:');
//         console.log( team.staff );
//     }
//     await consoleLogging();

// }

// makeReport();
// const populateStaff = async function() {
//     const populateStaff =  function() {

//     }
// }
// await consoleLogging();

createReport()
// populateStaff()
//        .then( saveHTML( createHTML( testData ) ) )
//     .then( writeFileResponse => {
//         console.log( writeFileResponse.message );
//     })
//.then.openHTML
