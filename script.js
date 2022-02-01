let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function checkHumanGuess(humanGuess) {
    if (humanGuess > 9 || humanGuess < 0) {
        alert("Please make sure your guess is between 0 and 9");
    }
}

function compareGuesses(humanGuess, computerGuess, target) {
    checkHumanGuess(humanGuess);
    let humanDist = Math.abs(humanGuess - target);
    let computerDist = Math.abs(computerGuess - target);
    if (humanDist <= computerDist) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    winner === 'human' ? humanScore += 1 : computerScore += 1;
}

function advanceRound () {
    currentRoundNumber += 1;
}



