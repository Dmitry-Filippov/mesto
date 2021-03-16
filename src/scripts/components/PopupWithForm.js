import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {}

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose.bind(this));
    document.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('pop-up-container')) {
        this.close()
      }
    })

    this._popupSelector.querySelector('.pop-up__close').addEventListener('click', () => {
      this.close();
    });

    this._popupSelector.querySelector('.pop-up__form').addEventListener('submit', (evt) => {
      this._handleFormSubmit(evt);
      this.close();
    })
  }

  close() {
    this._popupSelector.classList.remove('pop-up-container_opened');
    this._popupSelector.querySelector('.pop-up__form').reset();
  }
}