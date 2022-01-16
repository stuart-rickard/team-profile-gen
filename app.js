const { createHTML, saveHTML } = require( './lib/html-handler' )
const { askUserToConfirm } = require( './lib/obtain-user-input' );
const { openChrome } = require( './lib/open-chrome' )

const Team = require( './lib/Team' );

const filename = 'team-profile.html';

introMessage = () => {
    const intro = `Welcome to the Team Profile Generator!
Let's get started!`;
    console.log(intro);        
}

const createReport = async function() {
    introMessage();
    const team = new Team;
    await team.populateStaff();
    await saveHTML( createHTML( team.staff ), filename ) 
        .then( writeFileResponse => {
            console.log( writeFileResponse.message );
        })
    let proceed = await askUserToConfirm( 'Open Team Profile in Chrome?' );
    if (proceed) {
        openChrome(  __dirname, filename );
    }
}

createReport()
