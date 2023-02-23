
const todoInput = document.querySelector('todo-input')
const todoButton = document.querySelector('todo-button')
const todoList = document.querySelector('todo-list')

todoButton.addEventListener('click') = AddTodo

function AddTodo(event) {

    const Todo = document.createElement('div')

    const todoText = document.createElement('li')
    todoText.innerText = 'Hello'
    Todo.append(todoText)

    const todoChecked = document.createElement('button')
    todoChecked.innerHTML = 
    checked.classList.add('todo-checked')
    Todo.appendChild(todoChecked)

    const todoDelete = document.createElement('button')
    todoDelete.innerHTML = 
    checked.classList.add('todo-delete')
    Todo.appendChild(todoDelete)

}