function goodWork(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	fetch(url).then(response => response.json())
	.then(data => {
		const city = document.querySelector("#weather span:first-child");
		const weather = document.querySelector("#weather span:last-child");
		city.innerText = `❤︎..Today's weather in @${data.name}..❤︎\n`;
		weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
	});
}

function errorWork() {
	alert("Please allow the access to the Location..❤︎");
	const city = document.querySelector("#weather span:first-child");
	city.innerText = `❤︎..we couldn't find your location..❤︎\n`;
}

navigator.geolocation.getCurrentPosition(goodWork, errorWork);