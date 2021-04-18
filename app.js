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

  for (let i = 0; i < (arrayOfTodos.length)/10; i++) {
    const item = document.createElement("li");
    
    const title = arrayOfTodos[i].title;
  
    var newItem = document.createTextNode(title);

    item.appendChild(newItem);
  
    list.appendChild(item);

    var completed = arrayOfTodos[i].completed;

    if (completed === false) {
      item.style.color = "#f05945";
    } else {
      item.style.color = "rgba(71, 63, 184, 0.575)";
    }
  }
}

// Fetch the same data.
// Store the data in a variable.
// Add an input for the userID. This input should only take in a number from 1 - 10.
// Add a button that when clicked will:
// - Clear the previous todos from the view
// - Populate it with only todos with the userID that matches the number inputted
// - Store the currently filtered todos in a variable so that . . .
// You can create two more buttons that when clicked:
// - Removes those todos
// - Shows only todos that are either completed or not completed
// HINT 1: When you're removing and repopulating, remember that you're removing them from the DOM and not the array.

const userTodos = () => {
  const id = document.getElementById('id').value;

  for (let i = 0; i < arrayOfTodos.length; i++) {
    const userList = arrayOfTodos[i].filter(userId)

    const item = document.createElement("li");
    
  
    var newItem = document.createTextNode(title);
  } 
}

// const userList = user.filter()
// var user = arrayOfTodos[i].userId;

const userList = arrayOfTodos.filter(id => id.userId === document.getElementById('id').value)

console.log(userList)
