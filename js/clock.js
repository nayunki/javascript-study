const clock = document.querySelector("#clock");

time = parseInt(clock.innerText);

function showTime() {
	const date = new Date();
	hours = date.getHours();
	mins = String(date.getMinutes()).padStart(2, "0");
	secs = String(date.getSeconds()).padStart(2, "0");
	if (hours > 12) {
		hours -= 12;
		clock.innerText = "오후🕰"
	} else {
		clock.innerText = "오전⏰"
	}
	hours = String(hours).padStart(2, "0");
	clock.innerText += hours + "시 " + mins + "분 " + secs + "초 입니닷 🌈💖✨꺼져💕❤️";
	//와 ....... 이게 오후일 땐 계속 replace 해줘서 정상작동 됐는데 오전되니까 +=만 돼서 에러나뜸 ㅠㅠㅠㅠ
}

setInterval(showTime, 100); // 100ms마다 한 번씩 func 실행
// setTimeout(showTime, 1000); // 10000ms 뒤 한 번 실행