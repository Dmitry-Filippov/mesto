
  function enableValidation(obj) {
    const formList = Array.from(document.querySelectorAll(obj.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListener(formElement);
    })

    function showInputError(element, errorMessage) {
      const formError = element.closest(obj.formSelector).querySelector(`.${element.id}-error`);
      element.classList.add(obj.inputErrorClass);
      formError.textContent = errorMessage;
      formError.classList.add(obj.errorClass);
    };
    
    function hideInputError(element) {
      const formError = element.closest(obj.formSelector).querySelector(`.${element.id}-error`);
      element.classList.remove(obj.inputErrorClass);
      formError.classList.remove(obj.errorClass);
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
        buttonElement.classList.remove(obj.activeButtonClass);
      } else {
        buttonElement.classList.add(obj.activeButtonClass);
      }
    }

    function setEventListener(formElement) {
      const inputList = Array.from(formElement.querySelectorAll(obj.formInputSelector));
      const buttonElement = formElement.querySelector(obj.submitButtonSelector);
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          isValid(inputElement);
          toggleButtonState(inputList, buttonElement);
        })
        
      })
    }
  }

  const formObj = {
    formSelector: '.pop-up__form',
    inputErrorClass: 'pop-up__input_type_error',
    errorClass: 'pop-up__input-error_active',
    activeButtonClass: 'pop-up__submit_active',
    formInputSelector: '.pop-up__input',
    submitButtonSelector: '.pop-up__submit'
  }

  enableValidation(formObj);