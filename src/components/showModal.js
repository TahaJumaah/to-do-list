import createElement from './create_elements';

export function buildModal() {
  createElement('section', 'body', 'modal hidden', 'modal', 50, 50, 'Modal Modal');
  createElement('div', 'modal', 'modal-inside', 'modal-inside', '', '', 'Inside Inside');
  createElement('div', 'body', 'overlay hidden', 'overlay');
}
export default function showModal() {
  const addButton = document.getElementById('add-new');
  const modal = document.getElementById('modal');
  addButton.addEventListener('pointerdown', () => {
    modal.classList.remove('hidden');
  });
}
