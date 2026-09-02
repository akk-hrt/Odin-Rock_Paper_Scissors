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

let com = getComputerChoice();

// Function to get the human choice
function getHumanChoice() {
    // take player's choice
    let player = prompt("Choose Rock or Paper or Scissors").toLowerCase();
    
    if (player == "rock") {
        return "rock"
    } else if (player == "scissors") {
        return "scissors"
    } else if (player == "paper") {
        return "paper"
    } else {
        return getComputerChoice ();
    }

}
let player = getHumanChoice()


// To-Do:  a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Define two parameters for playRound: humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
    result = 0;
    // Show Result
    console.log("Computer's Choice: " + humanChoice);
    console.log("Your Choice: " + computerChoice);
    console.log(result);
    console.log("Your current score: " + humanScore);
    console.log("Computer's current score: " + computerScore);
}

playRound(player, com);