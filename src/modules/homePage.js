import displayPopup from './popupController.js';

export const cardsList = JSON.parse(localStorage.getItem('cardList')) || [];

export const clearElement = ((element) => {
  element.innerHTML = '';
});

export const save = (() => {
  localStorage.setItem('cardList', JSON.stringify(cardsList));
});

const displayElements = () => {
  const cardsListNode = document.getElementById('card_list');
  clearElement(cardsListNode);
  for (let i = 0; i < cardsList.length; i++) {
    cardsListNode.innerHTML += `
        <li>
          <div class="image_holder"><img class="card_image" src="${cardsList[i].card_images[0].image_url_small}" alt=""></div>
          <div class="card_details">
            <h2 class"card_title">${cardsList[i].name}</h2>
            <div class="likes-section">
              <i class="far fa-heart" data-id="${cardsList[i].id}">
              </i><br><span id="${cardsList[i].id}" class="likes"></span> likes
            </div>
          </div>
            <button id="commentBtn" class="card_comments" data-id="${cardsList[i].id}" >Comments</button>
        </li>`;
  }
};

async function getCards() {
  const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes');
  const data = await response.json();
  const cardsData = data.data;
  cardsList.length = 0;
  cardsList.push(...cardsData.slice(0, 12));
  save();
  displayElements();
}

document.addEventListener('click', (e) => {
  const popup = document.getElementById('appPopup');

  if (e.target === popup || e.target.id === 'close') popup.style.display = 'none';
  if (e.target.id === 'commentBtn') displayPopup(e.target.getAttribute('data-id'));
});

getCards();
