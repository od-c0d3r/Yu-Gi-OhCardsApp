import { cardsList } from './homePage.js';

const counterNode = document.getElementById('supy');

function arrayLength(a) {
  let length = 0;
  while (a[length] !== undefined) {
    length += 1;
  }
  return length
}

window.addEventListener('load', () => {
  counterNode.innerHTML = `(${arrayLength(cardsList)})`;
});
