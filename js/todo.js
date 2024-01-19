const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
// === const todoInput = document.querySelector("#todo-form input"); 
const todoList = document.querySelector("#todo-list");

let todoArray = [];

function saveTodos(event) {
	localStorage.setItem("todos", JSON.stringify(todoArray));
	//JSON.stringify : 뭐든지 문자열로 바꿔줌
	//JSON.parse : 문자열을 js object로 바꿔줌 ㅋㅋ.......
	// 도대체 자스개발자는 하는게먼데 ㅋㅋ
}

function deleteTodo(event) {
	const liTodelete = event.target.parentElement;
	// value로 값 삭제 시 중복값 처리 불가
	// event로 얻은 정보로 내부 배열에서 인덱스 몇번인지 알 방법 없음
	// => 고유 id랑 같이 저장해서 인덱싱해야 함
	todoArray = todoArray.filter((todo) => todo.id !== parseInt(liTodelete.id));
	// 화살표 함수 표현법 : ()를 인자로 받아서 => 뒤를 리턴함.
	// liTodelete는 인자로 안 받아도 .. 전역으로 사용 가능 (??)
	liTodelete.remove();
	// remove를 해도 변수 자체는 사라지지 않아서 강의에서처럼 위로 올려도 되지만 내가 나음 ㅅㄱ
	saveTodos();
}

function addTodo(newTodoObj) {
	const list = document.createElement("li");
	list.id = newTodoObj.id
	const span = document.createElement("span");
	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteTodo);
	list.appendChild(span);
	list.appendChild(button);
	span.innerText = newTodoObj.text;
	todoList.appendChild(list);
}

function handleTodoSubmit(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id: todoArray.length, // 강의에선 난수 생성 위해 Date.now() 사용
	}
	todoArray.push(newTodoObj);
	addTodo(newTodoObj);
	saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
const savedTodos = JSON.parse(localStorage.getItem("todos"));
if (savedTodos) {
	todoArray = savedTodos;
	savedTodos.forEach(addTodo);
	// forEach : 배열 0번째 인덱스부터 끝까지 자기 자신을 인자로 넣어 내부 함수 실행
}