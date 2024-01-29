import handleClick from "./app.js";

class Rank {
	template() {
		return `
        <button class="loginBtn">Logout</button>
		`;
	}
    templateContents() {
		return `
		<div>RankContents</div>
		`;
	}
}
export default new Rank();

window.addEventListener("click", handleClick);