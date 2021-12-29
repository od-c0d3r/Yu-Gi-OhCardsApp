import commentsCounter from './Counters.js';
import getBlueEyesCards from './API/Yu-gi-ohAPI.js';
import { getCard } from './PopupController.js';
import { getCommentsOf } from './API/InvolveAPI.js';
import { setCardsToLocalStorage } from './localStorageController.js';

export function clearElement(element) {
  element.innerHTML = '';
  return element;
};

export function textContentWith(ele, value) {
  ele.textContent = value;
  return ele;
};

export function createCardInfoNodes(cardId) {
  const card = getCard(Number(cardId));
  const [cardImg, cardTitle, cardDesc, cardType, cardATK, cardDEF, cardAttr, cardInfo, cardComments, commentHead, commentsDisplay] =
    ['img', 'h2', 'div', 'span', 'span', 'span', 'span', 'span', 'div', 'h4', 'div'].map((tag) => document.createElement(tag));
  cardImg.src = card.card_images[0].image_url;
  cardDesc.className = 'desc';
  cardInfo.className = 'highlight';
  cardComments.id = 'cardComments';
  commentHead.id = 'commentHead';
  commentsDisplay.id = 'commentsDisplay';
  textContentWith(cardTitle, `${card.name}`);
  textContentWith(cardType, `Type : ${card.type}`);
  textContentWith(cardATK, `Attack : ${(card.type === 'Spell Card') ? '-' : card.atk}`);
  textContentWith(cardAttr, `Attribute : ${(card.type === 'Spell Card') ? '-' : card.attribute}`);
  textContentWith(cardDEF, `Defence : ${(card.type === 'Spell Card') ? '-' : card.def}`);
  textContentWith(cardInfo, `Description : ${card.desc}`);
  getCommentsOf(cardId).then((commentsArr) => {
    textContentWith(commentHead, commentsCounter(commentsArr) === undefined ? 'No comments' : `Comments (${commentsCounter(commentsArr)})`);
    commentsArr.forEach((comment) => {
      commentsDisplay.innerHTML
        += `<div>${comment.creation_date} (${comment.username}) : ${comment.comment}</div>`;
    });
  });
  cardComments.append(commentHead, commentsDisplay);
  cardDesc.append(cardType, cardATK, cardAttr, cardDEF);
  return [cardImg, cardTitle, cardDesc, cardInfo, cardComments];
};

export function createCommentFormNodes(id) {
  const [addComment, addCommentHead, addCommentForm, inputUsername, inputComment, commentBtn] =
    ['div', 'h4', 'form', 'input', 'textarea', 'input'].map((tag) => document.createElement(tag));
  addComment.id = 'addComment';
  inputUsername.id = 'inputUsername';
  addCommentForm.id = 'commentForm';
  inputComment.id = 'inputComment';
  commentBtn.id = 'commentBtn';
  inputUsername.type = 'text';
  commentBtn.type = 'submit';
  addCommentHead.textContent = 'Add a comment';
  inputUsername.placeholder = 'Your name';
  inputComment.placeholder = 'Your comment';
  inputUsername.required = true;
  inputComment.required = true;
  commentBtn.value = 'Post';
  addCommentForm.setAttribute('data-id', id);
  addCommentForm.append(inputUsername, inputComment, commentBtn);
  addComment.append(addCommentHead, addCommentForm);
  return addComment;
}

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
