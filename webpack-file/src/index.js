import './style.css';
import Todo from './component.js';

const newtodo = new Todo();
newtodo.value = '';
const label = document.querySelectorAll('.task');
label.forEach((input, index) =>
  input.addEventListener('click', () => {
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn[index].style.display = 'inline';
  })
);
