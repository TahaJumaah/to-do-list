import { formatDistance, intervalToDuration } from 'date-fns';
import add from 'date-fns/add';
import createElement from './components/create_elements';
import Todo, { myTodos } from './components/createNewToDo';
import layout from './components/layout';
import './style.css';
import showToDos from './components/showYourTodos';
import showModal, { buildModal } from './components/showModal';

const distance = formatDistance(new Date(), new Date(2023, 0, 1));

let todo1 = new Todo('Buy Grocceries', (formatDistance(new Date(), new Date(2023, 7, 1))), 'Default');
todo1.save();

todo1 = new Todo('Call Haider Falah and Tell him that He is stupid as hell', (formatDistance(new Date(), new Date(2023, 0, 1))), 'Default');

todo1.save();

layout();
buildModal();
showToDos();

showModal();
