
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', AddTodo);

function AddTodo(event) {

    event.preventDefault();
    const Todo = document.createElement('div');
    Todo.classList.add('todo');

    const todoText = document.createElement('li');
    todoText.innerText = 'Hello';
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

    todoList.appendChild(Todo)
}