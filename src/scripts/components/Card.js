export default class Card {
  constructor(card, templateElement, handleCardClick, handleDelClick, handleLikeClick, handleRemoveLikeClick) {
    this._link = card.link;
    this._name = card.name;
    this._likes = card.likes;
    this._owner = card.owner;
    this._id = card._id;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
    this._handleDelClick = handleDelClick;
    this._handleLikeClick = handleLikeClick;
    this._handleRemoveLikeClick = handleRemoveLikeClick;
    this._isLiked = this._likes.includes();
    this._likesCount = this._likes.length;
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
    if(this._likes) {
      this._element.querySelector('.elements__likes-count').textContent = this._likesCount;
    } else {
      this._element.querySelector('.elements__likes-count').textContent = '0'
    }
    if(this._isLiked) {
      this._element.querySelector('.elements__like-button').classList.add('elements__like-button_liked');
    }

    return this._element;
  }

  deleteCard(element) {
    element.remove();
  }

  toggleLike(evt) {
    if(!this._isLiked) {
      evt.target.classList.add('elements__like-button_liked');
      this._isLiked = !this._isLiked;
      this._likesCount += 1;
      evt.target.closest('.elements__like-container').querySelector('.elements__likes-count').textContent = this._likesCount;
    } else {
      evt.target.classList.remove('elements__like-button_liked');
      this._isLiked = !this._isLiked;
      this._likesCount -= 1;
      evt.target.closest('.elements__like-container').querySelector('.elements__likes-count').textContent = this._likesCount;
    }
  }


  _setEventListeners() {
    const deleteButton = this._element.querySelector('.elements__delete-button');
    if(deleteButton) {
      deleteButton.addEventListener('click', (evt) => {
        this._handleDelClick(this, evt.target);
      });
    }

    const likeButton = this._element.querySelector('.elements__like-button');
    likeButton.addEventListener('click', (evt) => {
      if(!this._isLiked) {
        this._handleLikeClick(evt, this);
      } else {
        this._handleRemoveLikeClick(evt, this);
      }
    });

    const cardImage = this._element.querySelector('.elements__image');
    cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
  }
}