import createElement from './components/create_elements';
import Todo from './components/createNewToDo';

const todo1 = new Todo('Sameera', 25, 'default');
todo1.save();
const todo2 = new Todo('Sameer', 26, 'Never');
todo2.save();
