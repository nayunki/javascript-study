import Home from "./home.js";
import Chat from "./chat.js";
import Game from "./game.js";
import Rank from "./rank.js";
import Login from "./login.js";

const $app = document.querySelector(".App");
// 변수명 앞에 붙는 $는 아이디, 클래스, 태그처럼 단일 변수를 표시하기 위해 사용
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

const changeUrl = (requestedUrl) => {
	history.pushState(null, null, requestedUrl);
    // history.pushState API를 활용하여 페이지를 다시 로드하지 않고 URL을 탐색 할 수 있다.
	$app.innerHTML = routes[requestedUrl].template();
}

export default changeUrl;

window.addEventListener("popstate", () => {
    changeUrl(window.location.pathname);
});

if (localStorage.getItem("name") && localStorage.getItem("name") !== "") {
    loginForm.classList.add("hidden");
    greeting.innerText = `안녕하세요, ${localStorage.getItem("name")}님!`;
    changeUrl("/home");
}