import { postLikeWith } from './InvolveAPI.js';

let clicked = false;
const cardsListNode = document.getElementById('card_list');
const API_URI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = 'eVhYJo21vVPIv4GTCmdX';

async function showLikes() {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/likes`);
  const likesData = await response.json();
  const likeNodes = document.querySelectorAll('.likes');

  likeNodes.forEach((likeNode) => {
    likesData.forEach((likeObj) => {
      if (likeObj.item_id === Number(likeNode.id)) {
        likeNode.innerHTML = `${likeObj.likes}`;
      }
    });
  });
}

cardsListNode.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'i') {
    const cardId = Number(e.target.getAttribute('data-id'));
    e.target.classList.add('open');
    if (!clicked) {
      clicked = true;
      postLikeWith(cardId);
    } else {
      clicked = false;
    }
    showLikes();
  }
});

showLikes();
