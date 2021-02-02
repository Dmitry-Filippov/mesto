function showInputError(element, errorMessage) {
    const formError = element.closest('.pop-up__form').querySelector(`.${element.id}-error`);
    element.classList.add('pop-up__input_type_error');
    formError.textContent = errorMessage;
    formError.classList.add('pop-up__input-error_active');
  };
  
  function hideInputError(element) {
    const formError = element.closest('.pop-up__form').querySelector(`.${element.id}-error`);
    element.classList.remove('pop-up__input_type_error');
    formError.classList.remove('pop-up__input-error_active');
  }
  
  function isValid(input) {
    if (input.validity.valid) {
      hideInputError(input);
    } else {
      showInputError(input, input.validationMessage);
    }
  }
  
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
  
  function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.remove('pop-up__submit_active');
    } else {
      buttonElement.classList.add('pop-up__submit_active');
    }
  }