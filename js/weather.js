function goodWork(position) {
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	console.log("You live in ", lat, lng);
}

function errorWork() {
	alert("Please allow your access to Location");
}

navigator.geolocation.getCurrentPosition(goodWork, errorWork);