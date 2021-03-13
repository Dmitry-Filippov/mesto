import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {}

  setEventListeners() {
    super._popupSelector.querySelector('.pop-up__close').addEventListener('click', () => {
      this.close();
    });

    super._popupSelector.querySelector('.pop-up__form').addEventListener('submit', () => {
      this._handleFormSubmit();
    })
  }

  close() {
    super._popupSelector.classList.remove('pop-up-container_opened');
    super._popupSelector.querySelector('.pop-up__form').reset();
  }
}