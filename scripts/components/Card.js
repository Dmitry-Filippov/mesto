export default class Card {
  constructor(card, templateElement, handleCardClick) {
    this._link = card.link;
    this._name = card.name;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return this._templateElement.content.cloneNode(true);
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__image').alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;

    return this._element;
  }

  _deleteCard(evt) {
    evt.target.closest('.elements__item').remove();
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('elements__like-button_liked');
  }


  _setEventListeners() {
    const deleteButton = this._element.querySelector('.elements__delete-button');
    deleteButton.addEventListener('click', (evt) => {
      this._deleteCard(evt);
    });

    const likeButton = this._element.querySelector('.elements__like-button');
    likeButton.addEventListener('click', (evt) => {
      this._toggleLike(evt);
    });

    const cardImage = this._element.querySelector('.elements__image');
    cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
  }
}
