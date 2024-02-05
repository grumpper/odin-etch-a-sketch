// draw the grid
const gridSize = 16
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

// add color on hover
const squares = document.querySelectorAll('div.square')
squares.forEach((e) => {
    e.addEventListener("mouseover", () => e.style.background = "blue")
})
