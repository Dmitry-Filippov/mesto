export class Card {
  constructor(card, templateElement) {
    this._link = card.link;
    this._name = card.name;
    this._templateElement = templateElement;
  }

  _createCard() {
    const cardItem = this._templateElement.content.cloneNode(true);
    const cardImage = cardItem.querySelector('.elements__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardItem.querySelector('.elements__title').textContent = this._name;
    return cardItem;
  }

  _deleteCard(evt) {
    evt.target.closest('.elements__item').remove();
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('elements__like-button_liked');
  }

  _openPopUpImage() {
    openedImage.src = this._link;
    openedImage.alt = this._name;
    imageText.textContent = this._name;
    openPopUp(popUpImage);
  }

  _setEventListeners() {
    const cardElement = this._createCard;

    const deleteButton = cardElement.querySelector('.elements__delete-button');
    deleteButton.addEventListener('click', (evt) => {
      this._deleteCard(evt);
    });

    const likeButton = cardElement.querySelector('.elements__like-button');
    likeButton.addEventListener('click', (evt) => {
      this._toggleLike(evt);
    });

    const cardImage = cardElement.querySelector('.elements__image');
    cardImage.addEventListener('click', () => {
      this._openPopUpImage();
    })
  }
}