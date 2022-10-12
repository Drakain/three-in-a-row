const tiles = document.querySelectorAll('.tile');
const playerX = "X";
const playerO = "O";

let turn = playerX;

const boardState = Array(tiles.length);
boardState.fill(null);

// Elements
const strike = document.getElementById('strike');
const gameOverArea = document.getElementById('game-over-container');
const gameOverText = document.getElementById('game-over-text');
const playAgain = document.getElementById('restart');

// Event listeners
tiles.forEach(tile => tile.addEventListener('click', tileClick));

function tileClick(event) {
    if (gameOverArea.classList.contains('visible')) {
        return;
    }

    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if (tile.innerText != '') {
        return;
    }

    if (turn === playerX) {
        tile.innerText = playerX;
        boardState[tileNumber-1] = playerX;
        turn = playerO;
    } else {
        tile.innerText = playerO;
        boardState[tileNumber-1] = playerO;
        turn = playerX;
    }

    setHoverText();
    checkWinner();
}

// Hover text function
function setHoverText() {
    // Remove hover
    tiles.forEach((tile) => {
        tile.classList.remove('x-hover');
        tile.classList.remove('o-hover');
    });

    const hoverClass = `${turn.toLowerCase()}-hover`;

    tiles.forEach((tile) => {
        if (tile.innerText == '') {
            tile.classList.add(hoverClass)
        }
    });
}

setHoverText();