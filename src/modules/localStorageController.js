export function getCardsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('cardsList')) || [];
}

export const setCardsToLocalStorage = (list) => {
  localStorage.setItem('cardsList', JSON.stringify(list));
  return list
};
