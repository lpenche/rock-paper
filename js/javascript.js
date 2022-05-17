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
    } else if ((computerPlay === "rock" && playerSelection === "paper") || (computerPlay === "paper" && playerSelection === "scissors") || (computerPlay === "scissors" && playerSelection === "rock")){
        return `You win, ${capitalize(playerSelection)} beats ${capitalize(computerPlay)}` 
    } else {
        return `You lose, ${capitalize(computerPlay)} beats ${capitalize(playerSelection)}`
    }
}
 //Plays five round game, counts score and displays the winner
function game () {
        let playerCounter = 0;
        let computerCounter = 0;
    for (let i=0; i < 5; i++) {
        let computerSelection = computerPlay();
        let result = singleRound(computerSelection,prompt("Pick between rock/paper/scissors" ))
        console.log(result);
         if (result.includes("win")) {
             playerCounter++;
         } else {
             computerCounter++
         }
         console.log(`The score is ${playerCounter} - ${computerCounter}`)
    }
    if (playerCounter > computerCounter) {
        console.log("Game ended, you won") 
    } else {
        console.log("Game ended, you lost")
    }
}

game()