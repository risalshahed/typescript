// make a network request to fetch some json and print the result

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// let's start with the originial typescript codes!
// mention the label & type of the vars of todo object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
// interfaces in TS are used to define the structure of the object
// here, amra TS k bolteci kon variable kon type, N.B. amra j "userId" property ignore krteci that's totally fine; any property can be ignored while using object in TS


// fetch the data with http get request thorugh axios
axios.get(url)  // it's asynchronours, so returns a promise
.then(response => {
  // console.log(response.data);
  // const todo = response.data;

  // now I'll tell TS that this response.data is one of those Todos
  const todo = response.data as Todo;

  // just uncomment & observe the problems
  /* const ID = todo.ID;
  const Title = todo.Title;
  const finished = todo.finished; */

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, completed, title);
});

const logTodo = (id, title, completed) => {
  console.log(`
    id: ${id},
    title: ${title},
    completed: ${completed}
  `)
}