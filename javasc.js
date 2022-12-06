let options = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let playerWin = "Player Wins! ";
let computerWin = "Computer Wins! ";
const rockBeats = "Rock beats Scissors";
const paperBeats = "Paper beats Rock";
const scissorsBeats = "Scissors beats Paper";

function getCumputerChoice () {
    let randomOptions = options[Math.floor(Math.random() * options.length)];
    let option = randomOptions.toString();
    return option
}    

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
    if (player === "Rock" && computer === "Scissors") {
        return `${playerWin}${rockBeats}`
    }else if (player ==="Rock" && computer === "Paper") {
        return `${computerWin}${paperBeats}`
    }else if (player === "Paper" && computer === "Rock") {
        return `${playerWin}${paperBeats}`
    }else if (player === "Paper" && computer === "Scissors") {
        return `${computerWin}${scissorsBeats}`
    }else if (player === "Scissors" && computer === "Paper") {
        return `${playerWin}${scissorsBeats}`
    } else if ( player === "Scissors" && computer == "Rock") {
        return `${computerWin}${rockBeats}`
    }else {
        return "Draw"
    }  
}
function gameLoop(winer) {    
    for (let i = 0; i < 5; i++){
        winer = game()
        if (winer === "Player Wins! Rock beats Scissors" || winer === "Player Wins! Paper beats Rock" || winer === "Player Wins! Scissors beats Paper") {
            
            console.log(`${playerWin}`)
        }else if (winer === "Computer Wins! Rock beats Scissors" || winer === "Computer Wins! Paper beats Rock" || winer === "Computer Wins! Scissors beats Paper") {
            
            console.log(`${computerWin}`)
        }else {
            console.log("Draw! No points!")
        }
        
    }
}    
gameLoop()