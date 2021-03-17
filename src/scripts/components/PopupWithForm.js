import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector('.pop-up__form');
  }

  _getInputValues() {
    const inputsObj = {}
    Array.from(this._form.querySelectorAll('.pop-up__input')).forEach((inpit) => {
      inputsObj.input.name = input.value;
    })

    return inputsObj;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.querySelector('.pop-up__form').addEventListener('submit', (evt) => {
      this._handleFormSubmit(evt);
      this.close();
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}