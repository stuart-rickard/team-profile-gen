// const Team = require( './lib/Team' );
const { test } = require('picomatch');
const { createHTML, saveHTML } = require( './lib/html-handler' )

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

introMessage();
// const team = new Team()
//     team.getTeamMembers()
//     .then(function(){
        // createHTML(testData);
    saveHTML(createHTML(testData))
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
        });
//.then.openHTML