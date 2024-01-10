const slider = document.getElementById('slider');
const grid = document.getElementById('grid');
const sliderText = document.getElementById('slider_text');

sliderText.innerHTML = slider.value;
let rowLength = slider.value;

let width = 600;
let cellSize = width / rowLength;
slider.oninput = () => {
    sliderText.innerHTML = slider.value;
    rowLength = slider.value;
}
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
        });
        row.appendChild(cell);
    }
    grid.appendChild(row);
}
