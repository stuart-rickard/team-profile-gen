# Team Profile Generator

This is a challenge project for the UC Berkeley Extension Full-Stack Developer Bootcamp Course. The challenge requires a command line application that accepts user input in order to create an `html` file that contains a profile members of a work team.  The project is intended to develop skills in the area of Object-Oriented Programming and the use of `jest` for testing.  In addition to the above requirements, I wanted to maximize the modularity of the code.

This project uses `javascript` to create classes for `Team` and for `Staff`.  The app provides for the user to enter staff details through methods that are inherited from `Staff`.  Objects derived from `Staff` differ from each other: an example of polymorphism.  

This project uses the `inquirer` package from `npm` for the command line interface, but the top-level `app.js` file and the `Team` and `Staff` methods do not call `inquirer` directly; rather, those calls are CLI-agnostic and `inquirer` is sequestered in the module `obtain-user-input.js`, which was written for this project.  Of note, this project uses the Bootstrap library for styling, and `Async`, `await`, and `.then` coding is used with Promise objects to address the asynchronous nature of entry of inputs by the user.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

This project requires the use of `node.js` and the `inquirer` package from `npm`.  Ensure you have both `node.js` and `npm` initialized in your directory, then use `npm install` to ensure the correct package is installed (a `package.json` file is included in this repo).

## Usage

A video demonstrating use of the app can be found [here](https://drive.google.com/file/d/1mnOHn1nez2rT1dv2EAr-cvxWpB77mIWi/view?usp=sharing).

The steps are fairly self-explanatory in the command line instructions, but are listed here:
1. Enter the team's manager details: name, employee ID, email address and "office number".
2. Enter other staff, if any, details: name, employee ED, and email address as with the manager, but rather than office number, the challenge project states that other staff have roles of either Engineer (who have GitHub logins) or Interns (who have schools).
3. Once all staff are entered, the `html` file is generated in the directory from which the app is run.
4. The user may then choose to have the team profile opened in a new tab in a Chrome browser.
    
## License
  
This project is licensed using MIT License

See the [LICENSE](./LICENSE) file for license rights and limitations.

## Tests

Testing files are included in this repo.  These rely on the `jest` testing framework, and `jest` packages are referenced in the `package.json` file.  Use `npm test` to run the testing suite.
    
## Questions
        
My GitHub username is stuart-rickard; please feel free to contact me through my profile [here](https://github.com/stuart-rickard).
