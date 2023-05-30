let randomNumber;
let computerSelection;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        return computerSelection = "rock";
    } else if(randomNumber === 1){
        return computerSelection = "paper";
    } else {
        return computerSelection = "scissors";
    }
}

let playerSelection;
let result;
function playRound(){
    //playerSelection = prompt("Enter rock, paper or scissors.", "").toLowerCase();
    getComputerChoice();
    if(playerSelection === computerSelection){
        return result = "tie";
    } else if(playerSelection === "rock"){
        if(computerSelection === "scissors"){
            return result = "win";
        } else {
            return result = "lose";
        }
    } else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            return result = "win";
        } else {
            return result = "lose";
        }
    } else if(playerSelection === "scissors"){
        if(computerSelection === "paper"){
            return result = "win";
        } else {
            return result = "lose";
        }
    } 
}

let playerPoints = 0;
let computerPoints = 0;
function game(){
    if(playerPoints !== 5 && computerPoints !== 5){
        playRound();
        switch(result){
            case "win":
                roundWinner.textContent = "You win!";
                playerPoints++;
                break;
            case "lose":
                roundWinner.textContent = "You lose!";
                computerPoints++;
                break;
            case "tie":
                roundWinner.textContent = "It's a tie!";
                break;
        }
    }
    if(computerPoints === 5){
        winnerScreen.textContent = "You've lost the game!";
    }
    if(playerPoints === 5){
        winnerScreen.textContent = "You've won the game!";
    }
    scoreboard.textContent = `Player score: ${playerPoints} Computer score: ${computerPoints}`;
}

const buttons = document.querySelectorAll("button");
const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissors = document.querySelector(".btnScissors");

btnRock.addEventListener("click", () => playerSelection = "rock");
btnPaper.addEventListener("click", () => playerSelection = "paper");
btnScissors.addEventListener("click", () => playerSelection = "scissors");
buttons.forEach(button => button.addEventListener("click", () => game()));

const roundWinner = document.querySelector(".roundWinner");
const scoreboard = document.querySelector(".scoreboard");
const winnerScreen = document.querySelector(".winnerScreen");

roundWinner.textContent = "Let's go!";
scoreboard.textContent = "Player score: 0 Computer score: 0";
