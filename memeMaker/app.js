const colorOptions = Array.from(
	document.getElementsByClassName("color-option")
);
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
const eraseBtn = document.querySelector("#erase-btn");
const modeBtn = document.querySelector("#mode-btn");
const resetBtn = document.querySelector("#reset-btn");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.color = color;

ctx.moveTo(0, 0);

let isPainting = false;
let isFilling = false;

function handleMove(event) {
	if (isPainting) {
		ctx.lineTo(event.offsetX, event.offsetY);
		ctx.stroke();
		return;
	}
	ctx.moveTo(event.offsetX, event.offsetY);
	// ctx.beginPath();
	// const color = colors[Math.floor(Math.random() * colors.length)];
	// ctx.strokeStyle = color;
}

function handleLineWidthChange(event) {
	ctx.lineWidth = event.target.value;
}

function handleColorChange(event) {
	ctx.strokeStyle = event.target.value;
	ctx.fillStyle = event.target.value;
}

function handleColorClick(event) {
	const newColor = event.target.dataset.color;
	ctx.strokeStyle = newColor;
	ctx.fillStyle = newColor;
	color.value = newColor;
}

function handleCanvasClick() {
	if (isFilling) {
		ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}
}

function handleErase() {
	ctx.strokeStyle = "white";
	isFilling = false;
	modeBtn.innerText = "Fill";
}

function handleModeClick() {
	if (isFilling) {
		isFilling = false;
		modeBtn.innerText = "Fill";
	} else {
		isFilling = true;
		modeBtn.innerText = "Draw";
	}
}

function handleReset() {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

canvas.addEventListener("mousemove", handleMove);
canvas.addEventListener("mousedown", () => {
	isPainting = true;
});
canvas.addEventListener("mouseup", () => {
	isPainting = false;
	ctx.beginPath();
});
canvas.addEventListener("mouseleave", () => {
	isPainting = false;
});
lineWidth.addEventListener("change", handleLineWidthChange);
color.addEventListener("change", handleColorChange);
colorOptions.forEach(color => color.addEventListener("click", handleColorClick));
canvas.addEventListener("click", handleCanvasClick);
eraseBtn.addEventListener("click", handleErase);
modeBtn.addEventListener("click", handleModeClick);
resetBtn.addEventListener("click", handleReset);