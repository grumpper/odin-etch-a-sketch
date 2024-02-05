const gridSize = 16
const squareSize = "50vw"
const container = document.querySelector('#container')

for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div')
    row.classList.add("row")
    for (let j = 0; j < gridSize; j++) {
        const square = document.createElement('div')
        square.classList.add("square")
        row.appendChild(square)
    }
    container.appendChild(row)
}