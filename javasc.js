let options = ['Rock', 'Paper', 'Scissor'];
let playerScore = 0;
let computerScore = 0;
let playerWin = "Player Wins! ";
let computerWin = "Computer Wins! ";
const rockBeats = "Rock beats Scissor";
const paperBeats = "Paper beats Rock";
const scissorsBeats = "Scissor beats Paper";

function getCumputerChoice () {
    let randomOptions = options[Math.floor(Math.random() * options.length)];
    let option = randomOptions.toString();
    return option
}    

function playerChoice () {
    let choice1 = prompt("Rock Paper or Scissor?")
    let choiceLower = choice1.toLocaleLowerCase()
    if (choiceLower === "rock") {
        return "Rock"
    } else if (choiceLower === "paper") {
        return "Paper"
    } else if (choiceLower === "scissor") {
        return "Scissor"
    }
}   
function game (player, computer) {
    player = playerChoice();
    computer = getCumputerChoice();
    if (player === "Rock" && computer === "Scissor") {
        return `${playerWin}${rockBeats}`
    }else if (player ==="Rock" && computer === "Paper") {
        return `${computerWin}${paperBeats}`
    }else if (player === "Paper" && computer === "Rock") {
        return `${playerWin}${paperBeats}`
    }else if (player === "Paper" && computer === "Scissor") {
        return `${computerWin}${scissorsBeats}`
    }else if (player === "Scissor" && computer === "Paper") {
        return `${playerWin}${scissorsBeats}`
    } else if ( player === "Scissor" && computer == "Rock") {
        return `${computerWin}${rockBeats}`
    }else {
        return "Draw"
    }  
}
function gameLoop(winer) {    
    for (let i = 0; i < 5; i++){
        winer = game()
        if (winer === "Player Wins! Rock beats Scissor" || winer === "Player Wins! Paper beats Rock" || winer === "Player Wins! Scissor beats Paper") {
            playerScore++
            console.log(`${winer} Score ${playerScore}`)
        }else if (winer === "Computer Wins! Rock beats Scissor" || winer === "Computer Wins! Paper beats Rock" || winer === "Computer Wins! Scissor beats Paper") {
            computerScore++
            console.log(`${winer} Score ${computerScore}`)
        }else {
            console.log("Draw! No points!")
        }
    }
    if (playerScore > computerScore) {
        console.log("Player is the winer with score " + playerScore)
    }else if (playerScore < computerScore) {
        console.log("Computer is the winer with score " + computerScore)
    }else {
        console.log("Player score " + playerScore + " " + "Computer score " + computerScore + " No winer!")
    }
}    
gameLoop()