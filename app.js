const MAIN = document.querySelector("main");
const WIDTH_FIELD = document.getElementById("cwidth");
const HEIGHT_FIELD = document.getElementById("cheight");
const RESET = document.getElementById("reset");


const newCanvas = (cwidth, cheight) => {
    const canvas = document.createElement("div");
    canvas.classList.add("canvas");
    canvas.style.gridTemplateColumns = `repeat(${cwidth}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${cheight}, 1fr)`;
    for (let i = 0; i < cwidth; i++) {
        for (let j = 0; j < cheight; j++) {
            tile = document.createElement('div');
            tile.classList.add("tile");
            tile.onmouseenter = function(e) {
                e.target.classList.add("active");
                console.log(e.target);
            }
            canvas.appendChild(tile);
        }
    }
    return canvas;
}


const resetCanvas = () => {
    const w = WIDTH_FIELD.value;
    const h = HEIGHT_FIELD.value;
    console.log(`Creating new ${w}x${h} canvas...`)
    MAIN.innerHTML = "";
    MAIN.appendChild(newCanvas(w, h));
}


RESET.addEventListener("click", resetCanvas);