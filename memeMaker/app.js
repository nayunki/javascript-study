const colorOptions = Array.from(
	document.querySelector(".color-option")
);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
ctx.color = color;

ctx.moveTo(0, 0);

let isPainting = false;

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

addEventListener("mousemove", handleMove);
addEventListener("mousedown", () => {
	isPainting = true;
});
addEventListener("mouseup", () => {
	isPainting = false;
	ctx.beginPath();
});
addEventListener("mouseleave", () => {
	isPainting = false;
});

lineWidth.addEventListener("change", handleLineWidthChange);

color.addEventListener("change", handleColorChange);

colorOptions.forEach(color => color.addEventListener("click", handleColorClick));