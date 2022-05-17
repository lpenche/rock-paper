// Capitalize function
function capitalize (string) {
    let firstLetter = string.slice(0,1)
    let rest = string.slice(1)
    let stringOne = firstLetter.toUpperCase()
    let stringTwo = rest.toLowerCase()
    let result = stringOne + stringTwo
    return result
}

// Generates random pick bewteen rock,paper and scissors and returns pick
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

// Plays single round taking computerPlay() output and player selection
function singleRound (computerPlay, playerSelection) {
    playerSelection = playerSelection.toLowerCase() // Makes player selection non case sensitive.
    
    if (computerPlay === playerSelection) {
        return `Tied, ${capitalize(computerPlay)} is equal to ${capitalize(playerSelection)}` 
    } else if (computerPlay === "rock" && playerSelection === "paper") {
        return `You win, ${capitalize(playerSelection)} beats ${capitalize(computerPlay)}` 
    } else if (computerPlay === "rock" && playerSelection === "scissors") {
        return `You lose, ${capitalize(computerPlay)} beats ${capitalize(playerSelection)}`
    } else if (computerPlay === "paper" && playerSelection === "rock") {
        return `You lose, ${capitalize(computerPlay)} beats ${capitalize(playerSelection)}`
    } else if (computerPlay === "paper" && playerSelection === "scissors") {
        return `You win, ${capitalize(playerSelection)} beats ${capitalize(computerPlay)}`
    } else if (computerPlay === "scissors" && playerSelection === "rock") {
        return `You win, ${capitalize(playerSelection)} beats ${capitalize(computerPlay)}`
    } else if (computerPlay === "scissors" && playerSelection === "paper") {
        return `You lose, ${capitalize(computerPlay)} beats ${capitalize(playerSelection)}`
    } else {
        return "Coding error"
    }
}

console.log(singleRound(computerPlay(), "RoCK"))