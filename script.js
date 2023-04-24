const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = input.value;

  if (todo) {
    const todoel = document.createElement('li');
    todoel.innerHTML = todo;
    todos.appendChild(todoel);

    todoel.addEventListener("click", ()=>{
      todoel.classList.toggle("completed");
      addls();
    });

    todoel.addEventListener("contextmenu", (e)=>{
     e.preventDefault(); 
      todoel.remove();
    });
    
    input.value = "";
    addls();
  }
});

function addls() {
  const todoel = document.querySelectorAll("li");

  const todo =  [];

  todoel.forEach((e)=>{
    todo.push({
      text: e.innerText,
      completed: e.classList.contains("completed")
      });
  });
  localStorage.setItem("Todo", JSON.stringify(todo));
}