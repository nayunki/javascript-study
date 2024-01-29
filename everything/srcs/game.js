import handleClick from "./app.js";

class Game {
	template() {
		return `
		<div>Game</div>
        <button class="homeBtn" class="navi">Home</button>
        <button class="chatBtn" class="navi">Chat</button>
        <button class="gameBtn" class="navi">Game</button>
        <button class="rankBtn" class="navi">Rank</button>
        <button class="loginBtn">Logout</button>
		`;
	}
}
export default new Game();

window.addEventListener("click", handleClick);