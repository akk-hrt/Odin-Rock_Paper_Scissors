// Global variables
let humanScore = 0;
let computerScore = 0;
let roundCount = 1;
let playerSelection = "";
let computerSelection = "";
let result = "";

const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const resultField = document.getElementById("resultField");

const round = document.createElement("h2");
round.setAttribute("class", "center");
const yourChoice = document.createElement("p");
yourChoice.setAttribute("class", "center");
const comChoice = document.createElement("p");
comChoice.setAttribute("class", "center");
const roundResult = document.createElement("p");
roundResult.setAttribute("class", "center");
const yourCurrentScore = document.createElement("p");
yourCurrentScore.setAttribute("class", "center");
const comCurrentScore = document.createElement("p");
comCurrentScore.setAttribute("class", "center");
const winner = document.createElement("strong");
winner.setAttribute("class", "center");

function resetResultField () {
    round.innerText="";
    yourChoice.innerText = "";
    comChoice.innerText = "";
    roundResult.innerText = "";
    yourCurrentScore.innerText = "";
    comCurrentScore.innerText = "";
}

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
    if (roundCount != 1) {
        resetResultField();

    }

    if (humanScore > 4 || computerScore > 4) {
        if (humanScore > 4){
           round.innerText = "Winner: You"     
        } else if (computerScore > 4) {
        round.innerText = "Winner: Computer"
        }

        yourCurrentScore.innerText = "Your Final Score: " + humanScore;
        comCurrentScore.innerText = "Computer's Final Score: " + computerScore;
        yourChoice.remove();
        comChoice.remove();
        roundResult.remove();

    } else {

        round.innerText = "Result: Round " + roundCount;
        resultField.appendChild(round);

        yourChoice.innerText = "Your Choice: " + humanChoice;
        resultField.appendChild(yourChoice); 
        

        computerSelection = getComputerChoice();
        comChoice.innerText = "Computer's Choice: " + computerSelection;
        resultField.appendChild(comChoice); 

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
        roundResult.innerText = result;
        resultField.appendChild(roundResult);

        yourCurrentScore.innerText = "Your current score: " + humanScore;
        resultField.appendChild(yourCurrentScore);

        comCurrentScore.innerText = "Computer's current score: " + computerScore;
        resultField.appendChild(comCurrentScore);


        roundCount++;

   }

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
    
});