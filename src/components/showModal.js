import createElement from './create_elements';

export function buildModal() {
  createElement('section', 'body', 'modal hidden', 'modal', 50, 75);
  createElement('div', 'modal', 'modal-add-new', 'modal-add-new', 20, '', 'Add New To-Do');
  createElement('div', 'modal', 'modal-form', 'modal-form', 60, '', 'form');

  createElement('div', 'modal', 'modal-fns', 'modal-fns', 20, '', 'fns');
}
export default function showModal() {
  const addButton = document.getElementById('add-new');
  const modal = document.getElementById('modal');
  addButton.addEventListener('pointerdown', () => {
    modal.classList.remove('hidden');
  });
}
