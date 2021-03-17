export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add('pop-up-container_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove('pop-up-container_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener('click', (evt) => { 
      if (evt.target.classList.contains('pop-up-container')) {
        this.close()
      }
    })

    this._popupSelector.querySelector('.pop-up__close').addEventListener('click', () => {
      this.close();
    })



    
  }
}