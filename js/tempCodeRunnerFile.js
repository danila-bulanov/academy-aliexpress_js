fetch('https://jsonplaceholder.typicode.com/todos/1') //обещание
  .then(response => response.json())
  .then(json => console.log(json))