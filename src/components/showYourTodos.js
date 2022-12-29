/* eslint-disable no-plusplus */
import { myTodos } from './createNewToDo';
import createElement from './create_elements';

export default function showToDos() {
  for (let index = 0; index < myTodos.length; index++) {
    const thisToDo = myTodos[index];
    console.table(thisToDo);
    createElement('div', 'main-view-container', 'todo', `${index}`, '', 100);
    createElement('div', `${index}`, 'todo-name', '', '', 100, thisToDo.name);
    createElement('div', `${index}`, 'todo-info', `todo-info${index}`, '', 100);
    createElement('div', `todo-info${index}`, 'todo-due', `todo-due${index}`, 100, 70, `Due in ${thisToDo.due}`);
    for (let i = 0; i < 3; i++) {
      createElement('div', `todo-info${index}`, 'tools', `tool${i}`, 100, 10, 't');
    }
    // if (thisToDo.cat === 'Default') {
    //   const todo = document.getElementById(`${index}`);
    //   console.log(todo);
    //   todo.style.backgroundColor = 'red';
    // }
  }
}
