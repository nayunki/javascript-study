import handleClick from "./app.js";

class Chat {
	template() {
		return `
		<div>Chat</div>
        <button class="homeBtn" class="navi">Home</button>
        <button class="chatBtn" class="navi">Chat</button>
        <button class="gameBtn" class="navi">Game</button>
        <button class="rankBtn" class="navi">Rank</button>
        <button class="loginBtn">Logout</button>
		`;
	}
}
export default new Chat();

window.addEventListener("click", handleClick);