let container = document.getElementById('container')
let cells = document.getElementsByClassName('cell')
let restart = document.getElementById('restart')
let players = ['X', 'O']
let currentPlayer = players[0]

let winPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for (let i = 0; i < cells.length; i++) {

    cells[i].addEventListener('click', () => {

        if (cells[i].textContent !== '') {
            return
        }

        cells[i].textContent = currentPlayer

        if (checkWinner(currentPlayer)) {
            alert("Player " + currentPlayer + " won")
            return
        }

        if (checkDraw()) {
            alert("It's a draw")
            return
        }

        if (currentPlayer === players[0]) {
            currentPlayer = players[1]
        } else {
            currentPlayer = players[0]
        }

    })

}

function checkWinner(player) {

    for (let i = 0; i < winPos.length; i++) {
        let a = winPos[i][0]
        let b = winPos[i][1]
        let c = winPos[i][2]

        if (
            cells[a].textContent === player &&
            cells[b].textContent === player &&
            cells[c].textContent === player
        ) {
            return true
        }

    }

    return false
}

function checkDraw() {

    for (let i = 0; i < cells.length; i++) {

        if (cells[i].textContent === '') {
            return false
        }
        
    }

    return true
}

restart.addEventListener('click', () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = ''
    }
    currentPlayer = players[0]
})
