// Global variables
let humanScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
let result = "";

const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");

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

// Define two parameters for playRound: humanChoice and computerChoice
function playRound(humanChoice) {
    console.log("Your Choice: " + humanChoice);
    computerSelection = getComputerChoice();
    
    console.log("Computer's Choice: " + computerSelection);

    if (humanChoice === computerSelection) {
        result = "Draw!";
    } else if ( //player wins
        (humanChoice === "rock" && computerSelection === "scissors") || 
        (humanChoice === "scissors" && computerSelection === "paper") || 
        (humanChoice === "paper" && computerSelection === "rock")
     ) {
        // player wins
        result = "You win!"; 
        humanScore++;
    } else if ( // player loses
        (computerSelection === "rock" && humanChoice === "scissors") || 
        (computerSelection === "scissors" && humanChoice === "paper") || 
        (computerSelection === "paper" && humanChoice === "rock")
        ) {
        result = "You lose!"
        computerScore++;
    }
    
    // Show Result
    console.log(result);
    console.log("Your current score: " + humanScore);
    console.log("Computer's current score: " + computerScore);
    console.log(" ");
   

}

rock.addEventListener("click", () => {
    playerSelection = "rock";
    playRound(playerSelection);
});

scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    playRound(playerSelection);
});

paper.addEventListener("click", () => {
    playerSelection = "paper";
     playRound(playerSelection);
    // computerSelection = getComputerChoice();
    // console.log("Player's Choice: " + playerSelection);
    // console.log("Computer's Choice: " + computerSelection);
});


const btnPressed = document.getElementsByClassName("choice");





/* OLD CODES






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



// To-Do:  a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

/

console.log(computerSelection);


/* Legacy: Logic to run 5 rounds
function playGame() {
    for (let i = 1; i <= 5; i++)
    {
        console.log ("Round" + i);
        let com = getComputerChoice();
        let player = getHumanChoice();
        playRound(player, com);
    }
}

playGame();
*/
