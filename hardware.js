let rowLength = 16;
let width = 600;

let cellSize = width / rowLength;

const grid = document.getElementById('grid');

for (let i = 0; i < rowLength; i++) {
    const row = document.createElement("div");
    row.className = 'row';
    for (let j = 0; j < rowLength; j++) {
        const cell = document.createElement("div");
        cell.className = 'cell';
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.addEventListener('mouseover', () => {
            cell.style.opacity = +cell.style.opacity + 0.1;
            console.log(cell.style.opacity);
        });
        row.appendChild(cell);
    }
    grid.appendChild(row);
}
