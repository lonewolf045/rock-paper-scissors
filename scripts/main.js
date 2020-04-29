function computerPlay () {
    let choiceArr = ["Rock","Paper","Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choiceArr[choice];
}

function playRound (playerSelection , computerSelection) {
    let play = ["rock","paper","scissors"];
    let player = playerSelection.toLowerCase();
    console.log(player);
    let computer = computerSelection.toLowerCase();
    let message = "";
    let count = 0;
    if(play.indexOf(player) === play.indexOf(computer)) {
        message = "It's a tie !";
        count = 1;
    }
    else if(play.indexOf(player) - 1 === play.indexOf(computer) || (player === "rock" && computer === "scissors") ) {
        message = `You win! ${playerSelection} beats ${computerSelection}.`;
        count = 2;
    }
    else {
        message = `You loose! ${computerSelection} beats ${playerSelection}.`;
        count = 0;
    }
    return { "message" : message, "count" : count };
}

function game(event) {
    let playerSelection , computerSelection;
    //let score = 0;
    playerSelection = event.target.alt;
    console.log(event.target);
    computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    //score += result.count;
    alert(result.message);
    //console.log("Game Over!!!!");
    //console.log(`Your score: ${score}`);
}

const start = document.getElementById('play-buttons');
start.addEventListener('click',game);