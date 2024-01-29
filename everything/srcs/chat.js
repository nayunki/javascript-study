import handleClick from "./app.js";

class Chat {
	template() {
		return `
        <button class="loginBtn">Logout</button>
		`;
	}
    templateContents() {
		return `
		<div>ChatContents</div>
		`;
	}
}
export default new Chat();

window.addEventListener("click", handleClick);