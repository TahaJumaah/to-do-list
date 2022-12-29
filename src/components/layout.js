import { format } from 'date-fns';
import createElement from './create_elements';

export default function layout() {
  createElement('div', 'body', 'main-container', 'main-container', 100, 100);
  createElement('div', 'main-container', 'header', 'well-do', 10, 30, 'Well DO Logo');
  createElement('div', 'main-container', 'header', 'today-date', 10, 65, format(new Date(), 'dd/MM/yyy'));
  createElement('div', 'main-container', 'left-panel', 'left-panel', 90, 30);
  createElement('button', 'left-panel', 'left-panel', 'add-new', 30, 100, '+');
  createElement('div', 'left-panel', 'left-panel', 'categories', 70, 100, 'Categories');
  createElement('div', 'main-container', 'main-view', 'main-view-container', 90, 65);
}
