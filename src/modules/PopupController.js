import { postCommentWith } from './API/InvolveAPI.js';
import { getCardsFromLocalStorage } from './localStorageController.js';
import { createCardInfoNodes, createCommentFormNodes, textContentWith } from './UiController.js';

export function getCard(id) {
  const cards = getCardsFromLocalStorage();
  return cards.find((card) => card.id === id);
}

export function eleDisplayBlock(element) {
  element.style.display = 'block';
  return true;
}

export function getDate() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;
  return today;
}

export default function displayPopup(cardId) {
  const [popup, popupBody] = ['appPopup', 'popup-body'].map((id) => document.getElementById(id));
  const [cardImg, cardTitle, cardDesc, cardInfo, cardComments ] = createCardInfoNodes(cardId);
  const addComment = createCommentFormNodes(cardId);
  textContentWith(popupBody, '');
  popupBody.append(cardImg, cardTitle, cardDesc, cardInfo, cardComments, addComment);
  eleDisplayBlock(popup);
  return popup;
}

document.addEventListener('submit', (e) => {
  const [commentHead, commentsDisplay] = ['commentHead', 'commentsDisplay'].map((id) => document.getElementById(id));
  const [username, comment] = [e.target[0].value, e.target[1].value];
  const id = Number(e.target.getAttribute('data-id'));
  const today = getDate();
  postCommentWith(id, username, comment);
  commentsDisplay.innerHTML += `<div>${today} (${username}) : ${comment}</div>`;
  commentHead.innerHTML = `Comments (${commentsDisplay.childElementCount})`;
  e.target.reset();
  e.preventDefault();
});

document.addEventListener('click', (e) => {
  const popup = document.getElementById('appPopup');
  if (e.target === popup || e.target.id === 'close') popup.style.display = 'none';
  if (e.target.id === 'commentBtn') displayPopup(e.target.getAttribute('data-id'));
});
