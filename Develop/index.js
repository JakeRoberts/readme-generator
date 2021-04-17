// TODO: Include packages needed for this application
// uses node package manager to bring in
const inquirer = require("inquirer");
// core module
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the title of your project?",
        name: "title",
    },
    {
        message: "Give a description on your project:",
        name: "description",
    },
    {
        message: "How do you install the project?",
        name: "installation",
    },
    {
        message: "Give a brief summary on how to use your project:",
        name: "usage",
    },
    {
        message: "Provide information on how you can test all code:",
        name: "test",
    },
    {
        message: "Provide contributting guidelines:",
        name: "contribution",
    },
    {
        type: "list",
        message: "Licensing information:",
        name: "license",
        choices: ["MIT", "Apache", "GNU"],
    },
    {
        message: "Provide GitHub Username:",
        name: "GitHub",
    },
    {
        message: "Provide E-mail address:",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //takes in filename and data
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    //loads in questions to be answered in order. THEN will send answeres to another function
    inquirer.prompt(questions).then(handleResponses);
}

function handleResponses(response) {
const md = generateMarkdown(response);
writeToFile("README.md", md);
console.log("Thank you for using this app.");
}

// Function call to initialize app
init();
