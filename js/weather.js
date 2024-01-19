function goodWork(position) {
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
}

function errorWork() {
	alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(goodWork, errorWork);