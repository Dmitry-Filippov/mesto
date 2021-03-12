export const profileButton = document.querySelector('.profile__button');
export const cardsAddButton = document.querySelector('.profile__add-button');
export const nameValue = document.querySelector('.profile__name');
export const jobValue = document.querySelector('.profile__text');
export const elements = document.querySelector('.elements');

export const popUpProfile = document.querySelector('.pop-up-container_type_profile');
export const formElement = popUpProfile.querySelector('.pop-up');
export const nameInput = formElement.querySelector('.pop-up__input_type_name');
export const jobInput = formElement.querySelector('.pop-up__input_type_job');
export const popUpCloser = formElement.querySelector('.pop-up__close');

export const popUpCardsAdd = document.querySelector('.pop-up-container_type_card-add');
export const popUpCardsAddForm = popUpCardsAdd.querySelector('.pop-up__form_type_cards-add');
export const popUpCardsAddCloser = popUpCardsAdd.querySelector('.pop-up__close');
export const cardNameInput = popUpCardsAdd.querySelector('.pop-up__input_type_card-name');
export const cardLinkInput = popUpCardsAdd.querySelector('.pop-up__input_type_card-link');

export const popUpImage = document.querySelector('.pop-up-container_type_image');
export const openedImage = popUpImage.querySelector('.pop-up__image');
export const imageText = popUpImage.querySelector('.pop-up__text');
export const popUpImageCloser = popUpImage.querySelector('.pop-up__close');

export const formObj = {
  formSelector: '.pop-up__form',
  inputErrorClass: 'pop-up__input_type_error',
  errorClass: 'pop-up__input-error_active',
  activeButtonClass: 'pop-up__submit_active',
  formInputSelector: '.pop-up__input',
  submitButtonSelector: '.pop-up__submit'
}

export const cardTemplate = document.querySelector('#li__template');