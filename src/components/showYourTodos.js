/* eslint-disable no-plusplus */
import { myTodos } from './createNewToDo';

export default function showToDos() {
  for (let index = 0; index < myTodos.length; index++) {
    const thisToDo = myTodos[index];
    console.log(`${thisToDo.name} is due in ${thisToDo.due}`);
  }
}
