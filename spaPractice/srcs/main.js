import About from "./about.js";
import Home from "./home.js";

const $app = document.querySelector(".App");

const routes = {
	"/": Home,
	"/about": About,
}

$app.innerHTML = routes["/"].template();

export const changeUrl = (requestedUrl) => {
	// url 변경
	history.pushState(null, null, requestedUrl);
	// routes에서 url에 맞는 컴포넌트 찾아 렌더링
	$app.innerHTML = routes[requestedUrl].template();
}

function handleClick(event)
{
	if (event.target.classList.contains("moveToAboutPageBtn")) {
		changeUrl("/about");
	} else if (event.target.classList.contains("moveToHomePageBtn")) {
		changeUrl("/");
	}
}

window.addEventListener("click", handleClick);
window.addEventListener("popstate", () => {
	changeUrl(window.location.pathname);
});

// 뒤로가기, 앞으로가기 구현 by history API