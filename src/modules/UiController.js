import { setCardsToLocalStorage } from './localStorageController.js';
import getBlueEyesCards from './API/Yu-gi-ohAPI.js';

const clearElement = ((element) => {
  element.innerHTML = '';
});

function cardNode(card) {
  return `<li>
            <div class="image_holder"><img class="card_image" src="${card.card_images[0].image_url_small}" alt=""></div>
              <div class="card_details">
                <h2 class"card_title">${card.name}</h2>
                <div class="likes-section">
                  <i id="heart" class="far fa-heart" data-id="${card.id}"></i><br>
                  <span id="${card.id}" class="likes"></span> likes
                </div>
              </div>
            <button id="commentBtn" class="card_comments" data-id="${card.id}" >Comments</button>
        </li>`
}

export const displayElements = (cardsList) => {
  const cardsListNode = document.getElementById('card_list');
  clearElement(cardsListNode);
  for (let i = 0; i < cardsList.length; i++) {
    cardsListNode.innerHTML += cardNode(cardsList[i]);
  }
};

function displayBlueEyes() {
  getBlueEyesCards().then(blueEyesData => {
    displayElements(setCardsToLocalStorage(blueEyesData));
  })
}

displayBlueEyes();
