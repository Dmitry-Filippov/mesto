export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add('pop-up-container_opened');
  }

  close() {
    this._popupSelector.classList.remove('pop-up-container_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose.bind(this));

    this._popupSelector.querySelector('.pop-up__close').addEventListener('click', () => {
      this.close();
    })
    
  }
}