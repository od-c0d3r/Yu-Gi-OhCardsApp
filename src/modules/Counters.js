import { getCardsFromLocalStorage } from "./localStorageController";

function arrayLength(a) {
  let length = 0;
  while (a[length] !== undefined) {
    length += 1;
  }
  return length
}

function plusPlus(counter) {
  counter += 1;
  return counter;
}

export default function commentsCounter(comments) {
  let counter = 0;
  if (comments.length === undefined) return undefined;
  comments.forEach(() => {
    counter = plusPlus(counter);
    return counter;
  });
  if (counter === 0) return undefined;
  return counter;
}

window.addEventListener('load', () => {
  const counterNode = document.getElementById('supy');
  counterNode.innerHTML = `(${arrayLength(getCardsFromLocalStorage())})`;
});
