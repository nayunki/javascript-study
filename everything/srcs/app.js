import changeUrl from "./route.js";

export default function handleClick(event)
{
    if (event.target.classList.contains("homeBtn")) {
		changeUrl("/home");
	} else if (event.target.classList.contains("chatBtn")) {
		changeUrl("/chat");
	} else if (event.target.classList.contains("gameBtn")) {
        changeUrl("/game");
    } else if (event.target.classList.contains("rankBtn")) {
        changeUrl("/rank");
    } else if (event.target.classList.contains("loginBtn")) {
        localStorage.clear();
        greeting.innerText = "";
        loginForm.classList.remove("hidden");
        changeUrl("/");
    }
}