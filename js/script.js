const todos = [];
const RENDER_EVENT = "render-todo";

function generateTodoObject(id, task, timestamp, isCompleted) {
  return {
    id,
    task,
    timestamp,
    isCompleted,
  };
}

function generateId() {
    return +new Date();
  }

//fungsi add todo
function addTodo() {
    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;
  
    const generatedID = generateId();
    const todoObject = generateTodoObject(generatedID,textTodo,timestamp,false);
    todos.push(todoObject);
  
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
  


document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo();
  });
});




//

document.addEventListener(RENDER_EVENT, function () {
  console.log(todos);
});
