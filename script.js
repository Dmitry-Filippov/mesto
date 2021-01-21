const popUp = document.querySelector('.pop-up-container_type_profile');
const formElement = popUp.querySelector('.pop-up');
const nameInput = formElement.querySelector('.pop-up__input_type_name');
const jobInput = formElement.querySelector('.pop-up__input_type_job');
const popUpCloser = formElement.querySelector('.pop-up__close');
const profileButton = document.querySelector('.profile__button');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__text');
const elements = document.querySelector('.elements');

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
    popUp.classList.add('pop-up-container_opened');
}

function closePopUp() {
    popUp.classList.remove('pop-up-container_opened');
}


function handleFormSubmit(evt) {
    evt.preventDefault();
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
    closePopUp();
}


formElement.addEventListener('submit', handleFormSubmit);
profileButton.addEventListener('click', openPopUp);
popUpCloser.addEventListener('click', closePopUp);
