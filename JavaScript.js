// console.log("Hello World");

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

// Function to get thr human choice
function getHumanChoice() {
    return "Human Choice";
}

console.log(getHumanChoice());