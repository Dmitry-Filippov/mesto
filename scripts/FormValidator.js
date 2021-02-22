export class FormValidator {
  constructor(obj, formElement) {
    this._obj = obj;
    this._formElement = formElement;
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

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.remove(this._obj.activeButtonClass);
    } else {
      buttonElement.classList.add(this._obj.activeButtonClass);
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._obj.formInputSelector));
    const buttonElement = this._formElement.querySelector(this._obj.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      })
    })
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}