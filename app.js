let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.choice');

const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#comp-score');

const generateComputerChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    return options[randomNumber];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31";
}

const ShowWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        if (userWin) {
            userScore++;
            userScorePara.innerText = userScore;
            console.log("user win");
            msg.innerText = `You Win ! your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        } else {
            computerScore++;
            computerScorePara.innerText = computerScore;
            console.log("computer win");
           
            msg.innerText = `You Lose ! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = generateComputerChoice();
    console.log("computer choice = ", compChoice);

    ShowWinner(userChoice, compChoice);
};

choices.forEach(choice => {
    console.log(choice);

    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
