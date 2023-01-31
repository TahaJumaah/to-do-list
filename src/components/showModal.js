import createElement from './create_elements';

const modalInnerHTML = `<div class="main-modal-container hidden">
<form action="#" method="get">
    <label for="TD-Desc">To-Do Description</label>
    <input type="text" name="To-Do-Description" id="TD-Desc">
    <label for="TD-Date">Due Date</label>
    <input type="date" name="To-Do-Due" id="TD-Date">
    <label for="Submit"></label>
    <input type="submit" value="Submit" id="submit">
</form>
</div>`;

export default function showModal() {
  const addNew = document.getElementById('add-new');
  addNew.addEventListener('pointerdown', () => {
    createElement('div', 'body', 'modal-container', 'modal-container');
    console.log(document.getElementById('modal-container'));
  });
}
