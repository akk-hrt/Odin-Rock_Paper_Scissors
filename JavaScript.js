// Score Variables
let humanScore = 0;
let computerScore = 0;
let draw = 0;
let gameOver = false;
const winningScore = 5;
let result = "";

// Page Elements Selectors
const choiceButtons = document.querySelectorAll("[data-choice]");
const results = document.querySelector("#results");
const scoreDisplay = document.querySelector("#score")
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const restartButton = document.querySelector("#restart-button")
const actionFeedback = document.querySelector("#action-feedback");

choiceButtons.forEach((button) => {
    button.addEventListener("click", ()=>{
        humanSelection = button.dataset.choice;
        actionFeedback.textContent =
        `You selected ${humanSelection}. Playing the round.`;
        playRound(humanSelection);
    })
})

// Functions to Play Rounds
function getComputerChoice () {
// randomly return one of the following string values: “rock”, “paper” or “scissors”
    const choices = ["rock", "scissors", "paper"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


function updateScoreDisplay() {
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    
}

function playRound (humanChoice) {
    if (gameOver){
        return;
    }

    
    const computerChoice = getComputerChoice();

    // Compare humanChoice against computerChoice
    if (humanChoice === computerChoice) {
     
        results.textContent = `It's a tie. You both chose ${humanChoice}.`;
        
    
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        // Human wins
        
        results.textContent = `You win this round. ${humanChoice} beats ${computerChoice}!`
        humanScore++;
    } else {
       
        results.textContent = `You lose this round. ${computerChoice} beats ${humanChoice}.`
        computerScore++;
    }
    
    
    updateScoreDisplay();
    checkGameOver();

}

function checkGameOver() {
    if (humanScore === winningScore) {
        results.textContent = `You won the game ${humanScore} to ${computerScore}!`;
        gameOver = true;
        disableChoiceButtons();
        restartButton.hidden = false;
        actionFeedback.textContent =
        "The game is over. Select Play again to start a new game.";
        
    } else if (computerScore === winningScore) {
        results.textContent = `The computer won the game ${computerScore} tp ${humanScore}.`;
        gameOver = true;
        disableChoiceButtons();
        restartButton.hidden = false;
        actionFeedback.textContent =
        "The game is over. Select Play again to start a new game.";
    }
}

function disableChoiceButtons(){
    choiceButtons.forEach((button) => {
        button.disabled = true;
    });
}


function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;

    updateScoreDisplay();

    results.textContent = "Make a choice to begin.";
    actionFeedback.textContent =
    "You haven't started a game. Your choice will be displayed here once you make a choice.";

    choiceButtons.forEach((button) => {
        button.disabled = false;
    });

    restartButton.hidden = true;
}

restartButton.addEventListener("click", resetGame);
/* Old codes
// Global variables

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

*/