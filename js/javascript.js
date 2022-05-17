function computerPlay () {
    let randomNumber = Math.round(Math.random()*(3-1)) + 1;
    let selection;
    if (randomNumber === 1) {
        selection = "rock"
    } else if (randomNumber === 2) {
        selection = "paper"
    } else if (randomNumber === 3) {
        selection = "scissors"
    } else {
        alert("Computer error, restart")
    }
    return selection
}

function singleRound (computerPlay, playerSelection) {
    playerSelection = playerSelection.toLowerCase()
    
    if (computerPlay === playerSelection) {
        return `Tied, ${computerPlay} is equal to ${playerSelection}` 
    } else if (computerPlay === "rock" && playerSelection === "paper") {
        return `You win, ${playerSelection} beats ${computerPlay}` 
    } else if (computerPlay === "rock" && playerSelection === "scissors") {
        return `You lose, ${computerPlay} beats ${playerSelection}`
    } else if (computerPlay === "paper" && playerSelection === "rock") {
        return `You lose, ${computerPlay} beats ${playerSelection}`
    } else if (computerPlay === "paper" && playerSelection === "scissors") {
        return `You win, ${playerSelection} beats ${computerPlay}`
    } else if (computerPlay === "scissors" && playerSelection === "rock") {
        return `You win, ${playerSelection} beats ${computerPlay}`
    } else if (computerPlay === "scissors" && playerSelection === "paper") {
        return `You lose, ${computerPlay} beats ${playerSelection}`
    } else {
        return "Coding error"
    }
}

console.log(computerPlay())
console.log(singleRound(computerPlay(), "ROCK"))