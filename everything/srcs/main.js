import Home from "./home.js";
import Chat from "./chat.js";
import Game from "./game.js";
import Rank from "./rank.js";
import Login from "./login.js";

const $app = document.querySelector(".App");
const loginForm = document.querySelector("#loginForm");
const greeting = document.querySelector("#greeting");

const routes = {
	"/": Login,
    "/home": Home,
	"/chat": Chat,
    "/game": Game,
    "/rank": Rank,
}

$app.innerHTML = routes["/"].template();

export const changeUrl = (requestedUrl) => {
	history.pushState(null, null, requestedUrl);
	$app.innerHTML = routes[requestedUrl].template();
}

function handleClick(event)
{
    if (event.target.classList.contains("loginBtn")) {
        loginSuccess(event);
    } else if (event.target.classList.contains("homeBtn")) {
		changeUrl("/home");
	} else if (event.target.classList.contains("chatBtn")) {
		changeUrl("/chat");
	} else if (event.target.classList.contains("gameBtn")) {
        changeUrl("/game");
    } else if (event.target.classList.contains("rankBtn")) {
        changeUrl("/rank");
    } else if (event.target.classList.contains("logoutBtn")) {
        handleLogout();
    }
}

window.addEventListener("click", handleClick);
window.addEventListener("popstate", () => {
    changeUrl(window.location.pathname);
});

if (localStorage.getItem("name") !== "") {
    loginForm.classList.add("hidden");
    greeting.innerText = `안녕하세요, ${localStorage.getItem("name")}님!`;
    changeUrl("/home");
}



const loginIdInput = loginForm.querySelector("input");
const loginPwInput = document.getElementsByName("pw")[0];
//name으로 요소 찾는 다른 방법 없을까 ㅠ

function loginSuccess(event) {
	event.preventDefault();
	const name = loginIdInput.value;
    localStorage.setItem("name", name);
    loginForm.classList.add("hidden");
    greeting.innerText = `안녕하세요, ${name}님!`;
    changeUrl("/home");
}

function handleLogout() {
    localStorage.clear();
    greeting.innerText = "";
    loginForm.classList.remove("hidden");
    changeUrl("/");
}

loginForm.addEventListener("submit", loginSuccess);