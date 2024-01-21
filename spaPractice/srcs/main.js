import About from "./about.js";
import Home from "./home.js";

const $app = document.querySelector(".App");

const routes = {
	"/": Home,
	"/about": About,
}

$app.innerHTML = routes["/"].template();