// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.todo-filter');


// Event Listeners
document.addEventListener('DOMContentLoaded',  TodoGet);
todoButton.addEventListener('click', AddTodo);
todoList.addEventListener('click', TodoDeleteChange);
todoFilter.addEventListener('click', TodoFilter);


// Functions
function AddTodo(e){

    e.preventDefault();

    if (todoInput.value !== ''){
        todo = todoInput.value;
        // Add todo to local storage
        TodoSave(todo);
        // Add to Todo List
        SaveTodo(todo);
    }
}


function SaveTodo(todo) {

    const Todo = document.createElement('div');
        Todo.classList.add('todo');
    
        // Create li tag for 'todo' 
        const todoText = document.createElement('li');
        todoText.innerText = todo;
        Todo.append(todoText);

        // Add Check Button
        const todoChecked = document.createElement('button');
        todoChecked.innerHTML = '<i class="fas fa-check"></i>'; 
        todoChecked.classList.add('todo-checked');
        Todo.appendChild(todoChecked);

        // Add Delete Button
        const todoDelete = document.createElement('button');
        todoDelete.innerHTML = '<i class="fas fa-trash"></i>';
        todoDelete.classList.add('todo-delete');
        Todo.appendChild(todoDelete);
    
        todoList.appendChild(Todo);

        // Reset the input field
        document.querySelector('.todo-add').reset();
}


function TodoDeleteChange(e){

    const item = e.target;
    
    //Delete Todo 
    if (item.classList[0] === 'todo-delete'){
        todo = item.parentElement; 
        todo.classList.add('fall');

        // Remove todo from Localstorage
        TodoRemove(todo.innerText)
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }
    //Check Mark
    else if (item.classList[0] === 'todo-checked') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
} 


function TodoFilter(e){

    const todos = todoList.childNodes;
    todos.forEach(function(todo){

        switch(e.target.value){

            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'none';
                }else{
                    todo.style.display = 'flex';
                }
                break;
        }
    });
}


// Save new todos to local storage
function TodoSave(todo) {

    let todos = JSON.parse(localStorage.getItem('todos'));

    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));
}


// Get todos from local storage
function TodoGet(){

    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo){
        SaveTodo(todo)
    })
}


// Redmove todo from Localstorage
function TodoRemove(todo) {

    let todos = JSON.parse(localStorage.getItem('todos'));

    todos.splice(todos.indexOf(todo), 1)
    localStorage.clear()
    localStorage.setItem('todos', JSON.stringify(todos));
}