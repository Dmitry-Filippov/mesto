const profileButton = document.querySelector('.profile__button');
const CardsAddButton = document.querySelector('.profile__add-button');
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

const cardTemplate = document.querySelector('#li__template').content;

const Cards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


  Cards.forEach((item) => {
    let elementsItem = cardTemplate.cloneNode(true);
    elementsItem.querySelector('.elements__image').src = item.link;
    elementsItem.querySelector('.elements__image').alt = item.name;
    elementsItem.querySelector('.elements__title').textContent = item.name;
    elements.append(elementsItem);
  });

function openPopUp() {
    nameInput.setAttribute('value', nameValue.textContent);
    jobInput.setAttribute('value', jobValue.textContent);
    popUpProfile.classList.add('pop-up-container_opened');
}

function closePopUp() {
    popUpProfile.classList.remove('pop-up-container_opened');
}


function handleFormSubmit(evt) {
    evt.preventDefault();
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
    closePopUp();
}

function PopUpCardsAddOpenClose() {
  popUpCardsAdd.classList.toggle('pop-up-container_opened');
}

function cardAdd(evt) {
  evt.preventDefault();
  let elementsItem = cardTemplate.cloneNode(true);
  elementsItem.querySelector('.elements__image').src = cardLinkInput.value;
  elementsItem.querySelector('.elements__image').alt = cardNameInput.value;
  elementsItem.querySelector('.elements__title').textContent = cardNameInput.value;
  elements.prepend(elementsItem);
  PopUpCardsAddOpenClose();
}

formElement.addEventListener('submit', handleFormSubmit);
profileButton.addEventListener('click', openPopUp);
popUpCloser.addEventListener('click', closePopUp);
CardsAddButton.addEventListener('click', PopUpCardsAddOpenClose);
popUpCardsAddCloser.addEventListener('click', PopUpCardsAddOpenClose);
cardsFormElement.addEventListener('submit', cardAdd);