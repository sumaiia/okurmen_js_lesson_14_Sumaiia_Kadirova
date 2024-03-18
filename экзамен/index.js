const container =
document.querySelector('.container');
let size = 8;

function createBoard(size) {
    for(let i = 0;i < size; i++) {
        const square =
        document.createElement('div');
        square.classList.add('square');
        if ((Math.floor(i/ size) + i) % 2 === 0) {
            square.classList.add('black');
        }
        container.appendChild(square);
    }
}

createBoard(size);