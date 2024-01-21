const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function handleLoginSubmit(event) {
	event.preventDefault();
	const name = loginInput.value;
	if (name == "") {
		alert("write your name..!❤︎");
	} else {
		localStorage.setItem("name", name);
		loginForm.classList.add("hidden");
		greeting.innerText = `Hello ${name}..❤︎`;
	}
}

if (localStorage.length > 0) {
	loginForm.classList.add("hidden");
	greeting.innerText = "Hello " + localStorage.getItem("name") + "..❤︎";
}
loginForm.addEventListener("submit", handleLoginSubmit);