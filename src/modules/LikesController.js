import { API_URI, APP_ID, postLikeWith } from './API/InvolveAPI.js';

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

document.addEventListener('click', (e) => {
  if (e.target.id == 'heart') {
    const cardId = Number(e.target.getAttribute('data-id'));
    e.target.classList.add('open');
    postLikeWith(cardId);
  }
});

showLikes();
