// console.log("Hello World");
// Global variables
let humanScore = 0;
let computerScore = 0;

// Function to get the computer choice
function getComputerChoice () {
// randomly return one of the following string values: “rock”, “paper” or “scissors”
    let com = Math.trunc(Math.random() * 3); 

    if (com == 0) {
        return "rock";
    } else if (com == 1) {
        return "scissors";
    } else if (com == 2) {
        return "paper";
    } else {
        return "error";
    }
    

}

// console.log(getComputerChoice());

// Function to get the human choice
function getHumanChoice() {
    // take player's choice
    let player = prompt("Choose Rock or Paper or Scissors").toLowerCase();
    
    if (player == "rock") {
        return 0;
    } else if (player == "scissors") {
        return 1;
    } else if (player == "paper") {
        return 2
    } else {
        return Math.trunc(Math.random() * 3);
    }

}

console.log(getHumanChoice());
