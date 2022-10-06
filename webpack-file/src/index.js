import './style.css';
import Todo from './component';

/*const list = [
  {
    description: 'Submit code',
    index: 0,
    complete: true,
  },
  {
    description: 'Meet friends',
    index: 1,
    complete: true,
  },
  {
    description: 'Go to gym',
    index: 2,
    complete: false,
  },
  {
    description: 'Sleep',
    index: 3,
    complete: false,
  },
];
const ul = document.querySelector('#myUL');
// Create element
const generate = (descValue) => {
  const li = document.createElement('li');
  const check = document.createElement('input');
  const label = document.createElement('label');
  check.type = 'checkbox';
  ul.appendChild(li);
  li.innerHTML = descValue;
  li.appendChild(label);
  label.appendChild(check);
  check.setAttribute('class', 'check');
  label.setAttribute('class', 'label');
  li.setAttribute('class', 'items');
};
list.forEach((p) => {
  generate(p.description, p.complete, p.index);
});
*/

const newtodo = new Todo();
newtodo.value = '';
const label = document.querySelectorAll('.task');
label.forEach((input, index) =>
  input.addEventListener('click', () => {
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn[index].style.display = 'inline';
  })
);
