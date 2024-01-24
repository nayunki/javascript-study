const fileInput = document.querySelector("#file");
const textInput = document.getElementById("text");

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
ctx.lineCap = "round";
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

function handleDblclick(event) {
	ctx.save(); // 흑흑 .. tmp 저장 안해도 되네용..
	const text = textInput.value;
	if (text !== "") {
		ctx.lineWidth = 1;
		ctx.font = "48px serif";
		ctx.strokeText(text, event.offsetX, event.offsetY);
		// ctx.fillText(text, event.offsetX, event.offsetY);
		ctx.restore();
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

function handleFileChange(event) {
	const file = event.target.files[0];
	const url = URL.createObjectURL(file);
	const image = new Image(); // html에서 <img src=""/> 쓰는 것과 동일
	image.src = url;
	image.onload = function () {
		ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		fileInput.value = null;
	}
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
canvas.addEventListener("dblclick", handleDblclick);

lineWidth.addEventListener("change", handleLineWidthChange);
color.addEventListener("change", handleColorChange);
colorOptions.forEach(color => color.addEventListener("click", handleColorClick));
canvas.addEventListener("click", handleCanvasClick);
eraseBtn.addEventListener("click", handleErase);
modeBtn.addEventListener("click", handleModeClick);
resetBtn.addEventListener("click", handleReset);
fileInput.addEventListener("change", handleFileChange);