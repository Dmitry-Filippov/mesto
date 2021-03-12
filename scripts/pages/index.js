import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

const profileButton = document.querySelector('.profile__button');
const cardsAddButton = document.querySelector('.profile__add-button');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__text');
const elements = document.querySelector('.elements');

const popUpProfile = document.querySelector('.pop-up-container_type_profile');
const formElement = popUpProfile.querySelector('.pop-up');
const nameInput = formElement.querySelector('.pop-up__input_type_name');
const jobInput = formElement.querySelector('.pop-up__input_type_job');
const popUpCloser = formElement.querySelector('.pop-up__close');

const popUpCardsAdd = document.querySelector('.pop-up-container_type_card-add');
const popUpCardsAddForm = popUpCardsAdd.querySelector('.pop-up__form_type_cards-add');
const popUpCardsAddCloser = popUpCardsAdd.querySelector('.pop-up__close');
const cardNameInput = popUpCardsAdd.querySelector('.pop-up__input_type_card-name');
const cardLinkInput = popUpCardsAdd.querySelector('.pop-up__input_type_card-link');

const popUpImage = document.querySelector('.pop-up-container_type_image');
const openedImage = popUpImage.querySelector('.pop-up__image');
const imageText = popUpImage.querySelector('.pop-up__text');
const popUpImageCloser = popUpImage.querySelector('.pop-up__close');

const formObj = {
  formSelector: '.pop-up__form',
  inputErrorClass: 'pop-up__input_type_error',
  errorClass: 'pop-up__input-error_active',
  activeButtonClass: 'pop-up__submit_active',
  formInputSelector: '.pop-up__input',
  submitButtonSelector: '.pop-up__submit'
}
const profileForm = new FormValidator(formObj, formElement);
profileForm.enableValidation();
const cardsAddForm = new FormValidator(formObj, popUpCardsAddForm);
cardsAddForm.enableValidation();

const cardTemplate = document.querySelector('#li__template');


function openPopUp(popup) {
  popup.classList.add('pop-up-container_opened');
  popup.addEventListener('click', closeByOverlay);
  document.addEventListener('keydown', closeByEscape);
};

function closePopUp(popup) {
  popup.classList.remove('pop-up-container_opened');
  popup.removeEventListener('click', closeByOverlay);
  document.removeEventListener('keydown', closeByEscape);
};


function openPopUpProfile() {
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
  profileForm.resetValidation();
  openPopUp(popUpProfile);
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;
  closePopUp(popUpProfile);
}

function createCard(item) {
  return new Card(item, cardTemplate, handleCardClick).createCard();
}

function addCard(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = cardNameInput.value;
  newCard.link = cardLinkInput.value;
  renderCard(createCard(newCard), elements);
  closePopUp(popUpCardsAdd);
  popUpCardsAddForm.reset();
};

function closeByOverlay (evt) {
  if (evt.target.classList.contains('pop-up-container')) {
    closePopUp(evt.target);
  }
}

function closeByEscape (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    const openedPopUp = document.querySelector('.pop-up-container_opened');
    closePopUp(openedPopUp);
  }
}

function renderCard(card, wrap) {
  wrap.prepend(card);
};

function handleCardClick(name, link) {
  openedImage.src = link;
  openedImage.alt = name;
  imageText.textContent = name;
  openPopUp(popUpImage);
}

cards.forEach((item) => {
  renderCard(createCard(item), elements);
});

formElement.addEventListener('submit', handleFormSubmit);
profileButton.addEventListener('click', openPopUpProfile);
popUpCloser.addEventListener('click', () => {
  closePopUp(popUpProfile);
});
cardsAddButton.addEventListener('click', () => {
  popUpCardsAddForm.reset();
  cardsAddForm.resetValidation();
  openPopUp(popUpCardsAdd);
});
popUpCardsAddCloser.addEventListener('click', () => {
  closePopUp(popUpCardsAdd);
});
popUpCardsAddForm.addEventListener('submit', addCard);
popUpImageCloser.addEventListener('click', () => {
  closePopUp(popUpImage);
});
