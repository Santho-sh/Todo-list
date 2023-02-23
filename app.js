// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event Listeners
todoButton.addEventListener('click', AddTodo);
todoList.addEventListener('click', TodoDeleteChange)


// Functions
function AddTodo(event) {

    event.preventDefault();

    if (todoInput.value !== ''){

        const Todo = document.createElement('div');
        Todo.classList.add('todo');
    
        const todoText = document.createElement('li');
        todoText.innerText = todoInput.value;
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

        document.querySelector('.todo-add').reset();
    }

}

function TodoDeleteChange(e) {
    const item = e.target;
    //Delete Todo 
    if (item.classList[0] === 'todo-delete'){
        todo = item.parentElement; 
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }
    //Check Mark
    else if (item.classList[0] == 'todo-checked') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
} 