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