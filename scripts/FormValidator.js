export class FormValidator {
  constructor(obj, formElement) {
    this._obj = obj;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._obj.formInputSelector));
    this._buttonElement = this._formElement.querySelector(this._obj.submitButtonSelector);
  }

  _showInputError(element, errorMessage) {
    const formError = element.closest(this._obj.formSelector).querySelector(`.${element.id}-error`);
    element.classList.add(this._obj.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._obj.errorClass);
  };

  _hideInputError(element) {
    const formError = element.closest(this._obj.formSelector).querySelector(`.${element.id}-error`);
    element.classList.remove(this._obj.inputErrorClass);
    formError.classList.remove(this._obj.errorClass);
  }

  _isValid(input) {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input, input.validationMessage);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.remove(this._obj.activeButtonClass);
    } else {
      this._buttonElement.classList.add(this._obj.activeButtonClass);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      })
    })
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    })
    this._toggleButtonState();
  }
}