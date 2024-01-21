function goodWork(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	fetch(url).then(response => response.json())
	.then(data => {
		const city = document.querySelector("#weather span:first-child");
		const weather = document.querySelector("#weather span:last-child");
		city.innerText = "❤︎..Today's weather..❤︎\n";
		city.innerText += data.name;
		weather.innerText = `\n${data.weather[0].main} / ${data.main.temp}℃`;
	});
}

function errorWork() {
	alert("Please allow the access to the Location..❤︎");
}

navigator.geolocation.getCurrentPosition(goodWork, errorWork);