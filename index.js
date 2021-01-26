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
  const elementsItem = cardTemplate.cloneNode(true);
  const elementsImage = elementsItem.querySelector('.elements__image');
  elementsImage.src = item.link;
  elementsImage.alt = item.name;
  elementsItem.querySelector('.elements__title').textContent = item.name;

  const deleteButton = elementsItem.querySelector('.elements__delete-button');
  deleteButton.addEventListener('click', deleteCard);

  const likeButton = elementsItem.querySelector('.elements__like-button');
  likeButton.addEventListener('click', addRemoveLike);

  function openPopUpImage() {
      openPopUp(popUpImage);
      openedImage.src = item.link;
      openedImage.alt = item.name;
      imageText.textContent = item.name;
  };

  elementsItem.querySelector('.elements__image').addEventListener('click', openPopUpImage);

  elements.append(elementsItem);
});

function openPopUpProfile() {
    nameInput.setAttribute('value', nameValue.textContent);
    jobInput.setAttribute('value', jobValue.textContent);
    openPopUp(popUpProfile);
};
function closePopUpProfile() {
    closePopUp(popUpProfile);
};

function closePopUpImage() {
    closePopUp(popUpImage);
};


function handleFormSubmit(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;
  closePopUp(popUpProfile);
}

function openPopUpCardsAdd() {
    openPopUp(popUpCardsAdd);
};
function closePopUpCardsAdd() {
    closePopUp(popUpCardsAdd);
};

function cardAdd(evt) {
  evt.preventDefault();
  const elementsItem = cardTemplate.cloneNode(true);
  const elementsImage = elementsItem.querySelector('.elements__image');
  elementsImage.src = cardLinkInput.value;
  elementsImage.alt = cardNameInput.value;
  elementsItem.querySelector('.elements__title').textContent = cardNameInput.value;

  const deleteButton = elementsItem.querySelector('.elements__delete-button');
  deleteButton.addEventListener('click', deleteCard)

  const likeButton = elementsItem.querySelector('.elements__like-button');
  likeButton.addEventListener('click', addRemoveLike)

  elementsItem.querySelector('.elements__image').addEventListener('click', (evt) => {
    popUpImage.classList.toggle('pop-up-container_opened');
    openedImage.src = cardLinkInput.value;
    imageText.textContent = cardNameInput.value;
  })
  elements.prepend(elementsItem);
  closePopUpCardsAdd();
};

formElement.addEventListener('submit', handleFormSubmit);
profileButton.addEventListener('click', openPopUpProfile);
popUpCloser.addEventListener('click', closePopUpProfile);
cardsAddButton.addEventListener('click', openPopUpCardsAdd);
popUpCardsAddCloser.addEventListener('click', closePopUpCardsAdd);
cardsFormElement.addEventListener('submit', cardAdd);
popUpImageCloser.addEventListener('click', closePopUpImage);
