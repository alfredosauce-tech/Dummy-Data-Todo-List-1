// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  
  const list = document.getElementById('todo-list');

  for (let i = 0; i < arrayOfTodos.length; i++) {
    const item = document.createElement("li");
    
    const title = arrayOfTodos[i].title;
  
    var newItem = document.createTextNode(title);

    item.appendChild(newItem);
  
    list.appendChild(item);
  }
}