// draw the grid
function drawGrid(size) {
    const container = document.querySelector('#container')
    container.replaceChildren()
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div')
        row.classList.add("row")
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div')
            square.classList.add("square")
            row.appendChild(square)
        }
        container.appendChild(row)
    }
    // add color on hover
    let squares = document.querySelectorAll('div.square')
    squares.forEach((e) => {
        e.addEventListener("mouseover", () => e.style.background = "blue")
    })
}

// setup button
const button = document.querySelector('#setup-btn')
let gridSize = 16
drawGrid(gridSize)
button.addEventListener('click', () => {
    do {
        gridSize = prompt("How many square per row should be the grid?")
    } while (gridSize < 16 && gridSize > 100)
    drawGrid(gridSize)
})
