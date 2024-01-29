import handleClick from "./app.js";

class Game {
	template() {
		return `
        <button class="loginBtn">Logout</button>
		`;
	}
    templateContents() {
		return `
		<div>GameContents</div>
		`;
	}
}
export default new Game();

window.addEventListener("click", handleClick);