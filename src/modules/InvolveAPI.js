const API_URI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = 'eVhYJo21vVPIv4GTCmdX';

function getCommentsOptions() {
  return {
    method: 'GET',
  };
}

function postCommentsOptions(cardId, username, comment) {
  return {
    method: 'POST',
    body: JSON.stringify({
      item_id: cardId,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };
}

function postLikes(cardId) {
  return {
    method: 'POST',
    body: JSON.stringify({
      item_id: cardId,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };
}

export async function getCommentsOf(cardId) {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/comments?item_id=${cardId}`, getCommentsOptions());
  return response.json();
}

export async function postCommentWith(cardId, username, comment) {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/comments`, postCommentsOptions(cardId, username, comment));
  return response.json();
}

export async function postLikeWith(cardId) {
  const response = await fetch(`${API_URI}/apps/${APP_ID}/likes`, postLikes(cardId));
  return response.json();
}
