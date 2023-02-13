const toDoList = () => {
//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const containerTodoSvg = document.querySelector('.container__todo-svg');
const containerTodo = document.querySelector('.container__todo');

// const filterOption = document.querySelector('.filter-todo'); // filter

//event listeners
window.addEventListener('load', getTodos);
/* document.addEventListener('DOMContentLoaded', getTodos); */
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// filterOption.addEventListener('click', filterTodo); // filter

//functions
containerTodoSvg.addEventListener('click', ()=> {
    containerTodo.classList.toggle('setting__switch-on-off');
});
//generate new todo
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //add todo to localstorage
    saveLocalTodos(todoInput.value);
    
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";
}

//for delete
function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

     //check mark
     console.log(item.classList);
     if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');

    }
}


//filter results
/*   function filterTodo(e) {
      const todos = todoList.childNodes;
        todos.forEach(function(todo) {
          switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else{
                   todo.style.display = "none";
                }
                break;          
        }
      });
  } */

  //store data in local storage
  function saveLocalTodos(todo){
      //check- do i already have thing in there?
      let todos;
      if(localStorage.getItem("todos") === null) {
          todos = [];
      } else {
          todos = JSON.parse(localStorage.getItem("todos"));
      }

      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  //to get data
  function getTodos() {
      //check- do i already have thing in there?
      let todos;
      if(localStorage.getItem("todos") === null) {
          todos = [];
      } else {
          todos = JSON.parse(localStorage.getItem("todos"));
      }
      todos.forEach(function(todo){
          //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

      });
  }

  //remove data from local storage
  function removeLocalTodos(todo) {
       //check- do i already have thing in there?
       let todos;
       if(localStorage.getItem("todos") === null) {
           todos = [];
       } else {
           todos = JSON.parse(localStorage.getItem("todos"));
       }
       const todoIndex = todo.children[0].innerText;
       todos.splice(todos.indexOf(todoIndex), 1);
       localStorage.setItem('todos', JSON.stringify(todos));
  }
};

export default toDoList;