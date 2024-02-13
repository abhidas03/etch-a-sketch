function createGrid(width, rowLength) {
    cellSize = width / rowLength; 
    for (let i = 0; i < rowLength; i++) {
        const row = document.createElement("div");
        row.className = 'row';
        for (let j = 0; j < rowLength; j++) {
            const cell = document.createElement("div");
            cell.className = 'cell';
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            if (color_mode == 0) {
                cell.style.opacity = 0;
                cell.addEventListener('mouseover', () => {
                    cell.style.opacity = +cell.style.opacity + 0.1;
                });
            }
            else if (color_mode == 1) {
                cell.style.opacity = 1;
                cell.addEventListener('mouseover', () => {
                    let color = getRandomColor();
                    console.log(color);
                    cell.style.backgroundColor = color;
                });
            }
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function getRandomColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const rand = Math.floor(Math.random() * 7);
    return colors[rand];
}

const slider = document.getElementById('slider');
const grid = document.getElementById('grid');
const sliderText = document.getElementById('slider_text');
const grayscale_btn = document.getElementById('grayscale');
const rainbow_btn = document.getElementById('rainbow');

let color_mode = 0;
sliderText.innerHTML = `${slider.value} x ${slider.value}`;
let rowLength = slider.value;

let width = 600;
let cellSize = width / rowLength;
createGrid(width, rowLength);
slider.oninput = () => {
    sliderText.innerHTML = `${slider.value} x ${slider.value}`;
    rowLength = slider.value;
    grid.replaceChildren();
    createGrid(width, rowLength, color_mode);
}

grayscale_btn.onclick = () => {
    if (color_mode == 0) return;
    color_mode = 0;
    grid.replaceChildren();
    createGrid(width, rowLength, color_mode);
}
rainbow_btn.onclick = () => {
    if (color_mode == 1) return;
    color_mode = 1;
    grid.replaceChildren();
    createGrid(width, rowLength, color_mode);
}


