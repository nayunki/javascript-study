const clock = document.querySelector("#clock");

time = parseInt(clock.innerText);

// function timeGoes() {
// 	time++;
// 	if (time >= 60)
// 		time = 0;
// 	clock.innerText = time;
// }

function showTime() {
	const date = new Date();
	hours = date.getHours();
	mins = String(date.getMinutes()).padStart(2, "0");
	secs = String(date.getSeconds()).padStart(2, "0");
	if (hours > 12) {
		hours -= 12;
		clock.innerText = "오후 "
	}
	hours = String(hours).padStart(2, "0");
	clock.innerText += hours + "시 " + mins + "분 " + secs + "초 입니닷 (꺼져)";
}

setInterval(showTime, 100); // 1000ms마다 한 번씩 timeGoes func 실행
// setTimeout(showTime, 1000);