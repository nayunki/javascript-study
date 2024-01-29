import handleClick from "./app.js";

class Home {
	templateTitle() {
		return `
        <button class="loginBtn">Logout</button>
		`;
	}
    templateContents() {
		return `
		<div>HomeContents</div>
		`;
	}
}
export default new Home();

window.addEventListener("click", handleClick);