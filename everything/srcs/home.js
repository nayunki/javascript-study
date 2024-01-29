import handleClick from "./app.js";

class Home {
	template() {
		return `
		<div>Home</div>
        <button class="homeBtn" class="navi">Home</button>
        <button class="chatBtn" class="navi">Chat</button>
        <button class="gameBtn" class="navi">Game</button>
        <button class="rankBtn" class="navi">Rank</button>
        <button class="loginBtn">Logout</button>
		`;
	}
}
export default new Home();

window.addEventListener("click", handleClick);