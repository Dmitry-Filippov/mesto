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
const popUpCardsAddForm = popUpCardsAdd.querySelector('.pop-up__form');
const cardsFormElement = popUpCardsAdd.querySelector('.pop-up');
const popUpCardsAddCloser = popUpCardsAdd.querySelector('.pop-up__close');
const cardNameInput = popUpCardsAdd.querySelector('.pop-up__input_type_card-name');
const cardLinkInput = popUpCardsAdd.querySelector('.pop-up__input_type_card-link');

const popUpImage = document.querySelector('.pop-up-container_type_image');
const openedImage = popUpImage.querySelector('.pop-up__image');
const imageText = popUpImage.querySelector('.pop-up__text');
const popUpImageCloser = popUpImage.querySelector('.pop-up__close');

const cardTemplate = document.querySelector('#li__template').content;

function addRemoveLike(evt) {
  evt.target.classList.toggle('elements__like-button_liked');
};

function deleteCard(evt) {
  evt.target.closest('.elements__item').remove();
};

function openPopUp(popup) {
  popup.classList.add('pop-up-container_opened');
};

function closePopUp(popup) {
  popup.classList.remove('pop-up-container_opened');
};

cards.forEach((item) => {
  renderCard(createCard(item), elements);
});

function openPopUpProfile() {
  nameInput.setAttribute('value', nameValue.textContent);
  jobInput.setAttribute('value', jobValue.textContent);
  openPopUp(popUpProfile);
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;
  closePopUp(popUpProfile);
}

function closePopUpCardsAdd() {
  closePopUp(popUpCardsAdd);
};

function addCard(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = cardNameInput.value;
  newCard.link = cardLinkInput.value;
  elements.prepend(createCard(newCard));
  closePopUp(popUpCardsAdd);
  popUpCardsAddForm.reset();
};

function openPopUpImage(card) {
  openPopUp(popUpImage);
  openedImage.src = card.link;
  openedImage.alt = card.name;
  imageText.textContent = card.name;
};

function createCard(card) {
  const elementsItem = cardTemplate.cloneNode(true);
  const elementsImage = elementsItem.querySelector('.elements__image');
  elementsImage.src = card.link;
  elementsImage.alt = card.name;
  elementsItem.querySelector('.elements__title').textContent = card.name;
  const deleteButton = elementsItem.querySelector('.elements__delete-button');
  deleteButton.addEventListener('click', deleteCard);
  const likeButton = elementsItem.querySelector('.elements__like-button');
  likeButton.addEventListener('click', addRemoveLike);
  elementsItem.querySelector('.elements__image').addEventListener('click', () => {
    openPopUpImage(card);
  });
  return elementsItem;
}

function renderCard(card, wrap) {
  wrap.append(card);
};

formElement.addEventListener('submit', handleFormSubmit);
profileButton.addEventListener('click', openPopUpProfile);
popUpCloser.addEventListener('click', () => {
  closePopUp(popUpProfile);
});
cardsAddButton.addEventListener('click', () => {
  openPopUp(popUpCardsAdd);
});
popUpCardsAddCloser.addEventListener('click', () => {
  closePopUp(popUpCardsAdd);
});
cardsFormElement.addEventListener('submit', addCard);
popUpImageCloser.addEventListener('click', () => {
  closePopUp(popUpImage);
});

