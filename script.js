const cell = document.querySelectorAll('.cell');
const player1ScoreSpan = document.querySelector('.player1Score');
const player2ScoreSpan = document.querySelector('.player2Score');
const restartBtn = document.querySelector('.restart');

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let player1 = [];
let player2 = [];

let score = {
    player1: 0,
    player2: 0,
}

let flag = true;


const name1 = prompt('What is your name', 'Player 1');
const name2 = prompt('What is your name', 'Player 2');

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {
        if (flag === true && cell[i].innerHTML === "") {
            addCellsPlayer1(i);
        } else if (cell[i].innerHTML === "") {
            addCellsPlayer2(i);
        }
        checkWinner();
    })
}

function addCellsPlayer1(i) {
    cell[i].innerHTML = "X";
    player1.push(i);
    flag = false;
}
function addCellsPlayer2(i) {
    cell[i].innerHTML = "O";
    player2.push(i);
    flag = true;
}

function checkWinner() {
    winCombinations.find((item) => {
        if (item.every((i) => player1.includes(i))) {
            // Player 1 won
            alert(`${name1} Won `);
            score.player1++;
            drawScore();
            clearField();
        } else if (item.every((i) => player2.includes(i))) {
            // Player 2 won
            alert(`${name2} Won  `);
            score.player2++;
            drawScore();
            clearField();
        }
    })
}

function drawScore() {
    player1ScoreSpan.innerHTML = `${name1} : ` + score.player1;
    player2ScoreSpan.innerHTML = `${name2} : ` + score.player2;
}
drawScore();

function clearField() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
    }
    player1 = [];
    player2 = [];
    flag = true;
}

restartBtn.addEventListener('click', () => {
    clearField();
});