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
    let playerWin = "Player Wins! ";
    let computerWin = "Computer Wins! ";
    const rockBeats = "Rock beats Scissors";
    const paperBeats = "Paper beats Rock";
    const scissorsBeats = "Scissors beats Paper"
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
        let a = 0;
        let b = 0;
        let playerPoint = " Player points ";
        let computerPoint = " ComputerPoint ";
        winer = game()
        if (winer === "Player Wins! Rock beats Scissors" || winer === "Player Wins! Paper beats Rock" || winer === "Player Wins! Scissors beats Paper") {
            console.log(winer + playerPoint + a++)
        }else if (winer === "Computer Wins! Rock beats Scissors" || winer === "Computer Wins! Paper beats Rock" || winer === "Computer Wins! Scissors beats Paper") {
            console.log(winer + computerPoint + b++)
        }else {
            console.log("Draw! No points!")
        }
        
    }
}    
gameLoop()