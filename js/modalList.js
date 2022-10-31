const form = document.getElementById('form')
const input = document.getElementById('add')
const toDoModalUL = document.getElementById('toDoList')
const allTaskModal = document.getElementById('taskList')
const quickViewModal = document.getElementById('upcomingToDo')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addToDo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addToDo()
})

function addToDo(todo) {
    let todoText = input.value
    
    if(todo){
        todoText = todo.text
    }

    if(todoText){
        const todoListEl = document.createElement('li')
        const viewAllTaskEl = document.createElement('li')
        const quickViewEl = document.createElement('li')

        todoListEl.innerText = todoText
        viewAllTaskEl.innerText = todoText
        quickViewEl.innerText = todoText

        quickViewEl.addEventListener('click', () => {
            todoListEl.classList.toggle('completed') 
            updateLS()
        })

        quickViewEl.addEventListener('click', () =>  {
            viewAllTaskEl.classList.toggle('completed')
            updateLS()
        })     

        quickViewEl.addEventListener('click', (e) => {
            e.preventDefault()

            quickViewEl.remove()
            updateLS()
        })        

        toDoModalUL.appendChild(todoListEl)
        allTaskModal.appendChild(viewAllTaskEl)
        quickViewModal.appendChild(quickViewEl)

        if (todo && todo.completed) {
            todoListEl.classList.add('completed')
            viewAllTaskEl.classList.add('completed')
            quickViewEl.classList.add('completed')
            quickViewEl.remove()
            todoListEl.remove()
        }

        input.value = ''

        updateLS()
    }
}

function updateLS() {
    container = document.querySelector('#allTaskModal')
    viewAllTaskEl = container.querySelectorAll('li')

    const todos = []

    viewAllTaskEl.forEach(viewAllTaskEl => {
        todos.push({
            text: viewAllTaskEl.innerText,
            completed: viewAllTaskEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}