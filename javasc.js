//make rock paper and scissors in a singel letter or number value;
let options = ['Rock', 'Paper', 'Scissors'];

// computer will pick randome and display it;
function getCumputerChoice () {
    let randomOptions = options[Math.floor(Math.random() * options.length)];
    return randomOptions
}    
//player will pick a option
function playerChoice (x) {
    x = prompt("Make your choice")
    if (x === "rock" || x === "Rock" || x === "ROCK") {
        return 'Rock'
    }else if (x === "paper" || x === "Paper" || x === "PAPER") {
        return 'Paper'
    }else if ( x === "scissors" || x === "Scissors" || x === "SCISSORS") {
        return 'Scissors'
    }
    
}    
function game () {

}

