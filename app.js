let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("o");

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'o'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "l") return "Lizard";
    if (letter === "o") return "Spock";
    
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win! `;
    userChoice_div.classList.add('green-glow'); 
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000)
}


function lose(userChoice, computerChoice) {
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lost! `;
    userChoice_div.classList.add('red-glow'); 
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000)
}

function draw (userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} ties to ${convertToWord(computerChoice)}. It's a draw. `;
    userChoice_div.classList.add('gray-glow'); 
    setTimeout(function() { userChoice_div.classList.remove('gray-glow') }, 1000)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "rl":
        case "pr":
        case "po":
        case "sp":
        case "sl":
        case "lo":
        case "lp":
        case "os":
        case "or":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ro":
        case "ps":
        case "po":
        case "sr":
        case "so":
        case "lr":
        case "ls":
        case "op":
        case "ol":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "oo":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })

    lizard_div.addEventListener('click', function() {
        game("l");
    })

    spock_div.addEventListener('click', function() {
        game("o");
    })
}

main();
