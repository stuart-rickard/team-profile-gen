
const fs = require('fs');

const createCards = teamMembers => {
    return teamMembers.map( member => {
        switch ( member.role ) {
            case 'Manager':
                return `<div class="card mr-2 mb-2" style="width: 18rem; background-color: #C5DAE7;"><div class="card-body"><h5 class="card-title">${member.name}</h5><h6 class="card-subtitle mb-2 text-muted">Manager</h6><p class="card-text mb-0">Employee ID: ${member.employeeID}</p><a href="mailto:${member.email}">${member.email}</a><br><p class="card-text mb-0">Office number: ${member.officeNumber}</p></div></div>`;
            case 'Engineer': 
                return `<div class="card mr-2 mb-2" style="width: 18rem; background-color: #B0D996;"><div class="card-body"><h5 class="card-title">${member.name}</h5><h6 class="card-subtitle mb-2 text-muted">Engineer</h6><p class="card-text mb-0">Employee ID: ${member.employeeID}</p><a href="mailto:${member.email}">${member.email}</a><br><p class="card-text mb-0">GitHub: <a href="https://github.com/${member.githubUserName}">${member.githubUserName}</a></p></div></div>`;
            case 'Intern':
                return `<div class="card mr-2 mb-2" style="width: 18rem; background-color: #FFE15C;"><div class="card-body"><h5 class="card-title">${member.name}</h5><h6 class="card-subtitle mb-2 text-muted">Intern</h6><p class="card-text mb-0">Employee ID: ${member.employeeID}</p><a href="mailto:${member.email}">${member.email}</a><br><p class="card-text mb-0">School: ${member.school}</p></div></div>`;       
            };
        }    
    )
};

const createHTML = teamMembers => {
    const cardsAsArray = createCards(teamMembers);
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><title>Team Roster</title></head><body><h1 class="ml-4 mr-4 mt-4 pl-4" style="color: #EBF0FA; background-color: #044675;">Team Roster</h1><div class="d-flex flex-row flex-wrap ml-4 mr-2">${cardsAsArray.join('')}</div><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script></body></html>`;
};

const saveHTML = htmlString  => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./team-profile.html', htmlString, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'team-profile.html file created!'
        });
      });
    });
  };  

// const openHTML = htmlFile =>  {
//     command line to open the file
// }

// exports are used by ../app.js
module.exports = {
    createHTML,
    saveHTML,
    //openHTML,
}


