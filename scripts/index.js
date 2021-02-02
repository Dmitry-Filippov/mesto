const profileButton = document.querySelector('.profile__button');
const cardsAddButton = document.querySelector('.profile__add-button');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__text');
const elements = document.querySelector('.elements');

const popUpProfile = document.querySelector('.pop-up-container_type_profile');
const formElement = popUpProfile.querySelector('.pop-up');
const profileForm = formElement.querySelector('.pop-up__form_type_profile');
const profileInputList = Array.from(profileForm.querySelectorAll('.pop-up__input'));
const profileSubmitButton = profileForm.querySelector('.pop-up__submit');
const nameInput = formElement.querySelector('.pop-up__input_type_name');
const jobInput = formElement.querySelector('.pop-up__input_type_job');
const popUpCloser = formElement.querySelector('.pop-up__close');

const popUpCardsAdd = document.querySelector('.pop-up-container_type_card-add');
const popUpCardsAddForm = popUpCardsAdd.querySelector('.pop-up__form_type_cards-add');
const cardsAddInputList = Array.from(popUpCardsAddForm.querySelectorAll('.pop-up__input'));
const cardsAddSubmitButton = popUpCardsAddForm.querySelector('.pop-up__submit');
const cardsFormElement = popUpCardsAdd.querySelector('.pop-up');
const popUpCardsAddCloser = popUpCardsAdd.querySelector('.pop-up__close');
const cardNameInput = popUpCardsAdd.querySelector('.pop-up__input_type_card-name');
const cardLinkInput = popUpCardsAdd.querySelector('.pop-up__input_type_card-link');

const popUpImage = document.querySelector('.pop-up-container_type_image');
const openedImage = popUpImage.querySelector('.pop-up__image');
const imageText = popUpImage.querySelector('.pop-up__text');
const popUpImageCloser = popUpImage.querySelector('.pop-up__close');

const cardTemplate = document.querySelector('#li__template').content;

function toggleLike(evt) {
  evt.target.classList.toggle('elements__like-button_liked');
};

function deleteCard(evt) {
  evt.target.closest('.elements__item').remove();
};

function openPopUp(popup) {
  popup.classList.add('pop-up-container_opened');
  popup.addEventListener('click', closePopUpOverlay);
};

function closePopUp(popup) {
  popup.classList.remove('pop-up-container_opened');
  popup.removeEventListener('click', closePopUpOverlay);
};

cards.forEach((item) => {
  renderCard(createCard(item), elements);
});

function openPopUpProfile() {
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
  toggleButtonState(profileInputList, profileSubmitButton);
  isValid(nameInput);
  isValid(jobInput);
  openPopUp(popUpProfile);
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;
  closePopUp(popUpProfile);
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

function openPopUpImage(card) {
  openedImage.src = card.link;
  openedImage.alt = card.name;
  imageText.textContent = card.name;
  openPopUp(popUpImage);
};

function closePopUpOverlay (evt) {
  if (evt.target.classList.contains('pop-up-container')) {
    closePopUp(evt.target);
  }
}

function createCard(card) {
  const elementsItem = cardTemplate.cloneNode(true);
  const elementsImage = elementsItem.querySelector('.elements__image');
  elementsImage.src = card.link;
  elementsImage.alt = card.name;
  elementsItem.querySelector('.elements__title').textContent = card.name;
  const deleteButton = elementsItem.querySelector('.elements__delete-button');
  deleteButton.addEventListener('click', deleteCard);
  const likeButton = elementsItem.querySelector('.elements__like-button');
  likeButton.addEventListener('click', toggleLike);
  elementsItem.querySelector('.elements__image').addEventListener('click', () => {
    openPopUpImage(card);
  });
  return elementsItem;
}

function renderCard(card, wrap) {
  wrap.prepend(card);
};

formElement.addEventListener('submit', handleFormSubmit);
profileButton.addEventListener('click', openPopUpProfile);
popUpCloser.addEventListener('click', () => {
  closePopUp(popUpProfile);
});
cardsAddButton.addEventListener('click', () => {
  openPopUp(popUpCardsAdd);
  isValid(cardNameInput);
  isValid(cardLinkInput);
  toggleButtonState(cardsAddInputList, cardsAddSubmitButton);
});
popUpCardsAddCloser.addEventListener('click', () => {
  closePopUp(popUpCardsAdd);
});
cardsFormElement.addEventListener('submit', addCard);
popUpImageCloser.addEventListener('click', () => {
  closePopUp(popUpImage);
});

nameInput.addEventListener('input', () => {
  isValid(nameInput);
  toggleButtonState(profileInputList, profileSubmitButton);
})

jobInput.addEventListener('input', () => {
  isValid(jobInput);
  toggleButtonState(profileInputList, profileSubmitButton);
})

cardNameInput.addEventListener('input', () => {
  isValid(cardNameInput);
  toggleButtonState(cardsAddInputList, cardsAddSubmitButton);
})

cardLinkInput.addEventListener('input', () => {
  isValid(cardLinkInput);
  toggleButtonState(cardsAddInputList, cardsAddSubmitButton);
})