//make rock paper and scissors in a singel letter or number value;
let options = ['Rock', 'Paper', 'Scissors'];

// computer will pick randome and display it;
function getCumputerChoice () {
    let randomOptions = options[Math.floor(Math.random() * options.length)];
    let option = randomOptions.toString();
    return option
}    
//player will pick a option
function playerChoice () {
    let choice1 = prompt("Make your choice")
    let choiceLower = choice1.toLocaleLowerCase()
    if (choiceLower === "rock") {
        return "Rock"
    } else if (choiceLower === "paper") {
        return "Paper"
    } else if (choiceLower === "scissors") {
        return "Scissors"
    }
}   
function game (player, computer) {
    player = playerChoice();
    computer = getCumputerChoice();
    let playerPoints = "Player Wins! ";
    let computerPoints = "Computer wins! ";
    const rockBeats = "Rock beats Scissors";
    const paperBeats = "Paper beats Rock";
    const scissorsBeats = "Scissors beats Paper"
    if (player === "Rock" && computer === "Scissors") {
        console.log(`${playerPoints}${rockBeats}`)
    }else if (player ==="Rock" && computer === "Paper") {
        console.log(`${computerPoints}${paperBeats}`)
    }else if (player === "Paper" && computer === "Rock") {
        console.log(`${playerPoints}${paperBeats}`)
    }else if (player === "Paper" && computer === "Scissors") {
        console.log(`${computerPoints}${scissorsBeats}`)
    }else if (player === "Scissors" && computer === "Paper") {
        console.log(`${playerPoints}${scissorsBeats}`)
    } else if ( player === "Scissors" && computer == "Rock") {
        console.log(`${computerPoints}${rockBeats}`)
    }else {
        console.log("Draw")
    }  
}
game ()