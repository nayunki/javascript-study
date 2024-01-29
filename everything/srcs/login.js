import changeUrl from "./route.js";

class Login {
	templateTitle() {
		return `
		<div>Login</div>
		`;
	}
	templateContents() {
		return `
		<div>LoginContents</div>
		`;
	}
}
export default new Login();

const greeting = document.querySelector("#greeting");
const loginIdInput = loginForm.querySelector("input");
const loginPwInput = document.getElementsByName("pw")[0];
//name으로 요소 찾는 다른 방법 없을까 ㅠ

function loginSuccess(event) {
	event.preventDefault();
	const name = loginIdInput.value;
	loginIdInput.value = "";
	loginPwInput.value = "";
    localStorage.setItem("name", name);
    loginForm.classList.add("hidden");
    greeting.innerText = `안녕하세요, ${name}님!`;
    changeUrl("/home");
}

loginForm.addEventListener("submit", loginSuccess);