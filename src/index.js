import { formatDistance, intervalToDuration } from 'date-fns';
import add from 'date-fns/add';
import createElement from './components/create_elements';
import Todo, { myTodos } from './components/createNewToDo';
import layout from './components/layout';
import './style.css';
import showToDos from './components/showYourTodos';

const distance = formatDistance(new Date(), new Date(2023, 0, 1));

let todo1 = new Todo('One', (formatDistance(new Date(), new Date(2023, 1, 1))), 'Default');
todo1.save();

todo1 = new Todo('two', (formatDistance(new Date(), new Date(2023, 1, 1))), 'Default');

todo1.save();

showToDos();
layout();
