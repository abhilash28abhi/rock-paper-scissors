const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.pick');
const scoreElement = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const playAgain = document.getElementById('reset');
const userSelect = document.getElementById('user_select');
const computerSelect = document.getElementById('computer_select');
const winner = document.getElementById('winner');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');
const openBtn = document.getElementById('open');

let score = 0;
let userChoice;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
        checkWinner();
    });
});

playAgain.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none';
});

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

const pickRandomChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

const updateScore = (value) => {
    score += value;
    scoreElement.innerText = score;
}

const checkWinner = () => {
    const computerChoice = pickRandomChoice();

    //update the view
    updateSelection(userSelect, userChoice);
    updateSelection(computerSelect, computerChoice);

    if (userChoice === computerChoice) {
        //draw
        winner.innerText = 'draw';
    } else if ((userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        //won
        updateScore(1);
        winner.innerText = 'win';
    } else {
        updateScore(-1);
        winner.innerText = 'loose';
    }

    main.style.display = 'none';
    selection.style.display = 'flex';
}

const updateSelection = (selectionEl, choice) => {
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');

    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`);
    img.src = `./images/icon-${choice}.svg`;
    img.alt = choice;
}