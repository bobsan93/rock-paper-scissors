//make rock paper and scissors in a singel letter or number value;
let options = ['Rock', 'Paper', 'Scissors'];

// computer will pick randome and display it;
function getCumputerChoice () {
    let randomOptions = options[Math.floor(Math.random() * options.length)];
    return randomOptions
}    
//player will pick a option
