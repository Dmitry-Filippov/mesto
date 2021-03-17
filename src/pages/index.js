import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import {cards} from '../scripts/utils/initial-cards.js';
import {profileButton, cardsAddButton, nameValue, jobValue, elements, formElement, nameInput, 
  jobInput, popUpCardsAddForm, cardNameInput, cardLinkInput, formObj, cardTemplate} from '../scripts/utils/constants.js';
import './index.css';

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;
}

function createCard(item) {
  return new Card(item, cardTemplate, handleCardClick).createCard();
}

function addCardSubmit(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = cardNameInput.value;
  newCard.link = cardLinkInput.value;
  defaultCards.addItem(createCard(newCard));
};


function handleCardClick(name, link) {
  popupWithImage.open(link, name);
}


profileButton.addEventListener('click', () => {
  nameInput.value = userInfo.getUserInfo().userName;
  jobInput.value = userInfo.getUserInfo().userInfo;
  popupWithFormProfile.open();
});

cardsAddButton.addEventListener('click', () => {
  cardsAddForm.resetValidation();
  popupWithformCardsAdd.open()
});

const profileForm = new FormValidator(formObj, formElement);
profileForm.enableValidation();
const cardsAddForm = new FormValidator(formObj, popUpCardsAddForm);
cardsAddForm.enableValidation();


const defaultCards = new Section({items: cards, renderer: createCard}, elements);
defaultCards.renderItems();


const popupWithImage = new PopupWithImage('.pop-up-container_type_image');
popupWithImage.setEventListeners();

const popupWithFormProfile = new PopupWithForm('.pop-up-container_type_profile', handleFormSubmit);
popupWithFormProfile.setEventListeners();

const popupWithformCardsAdd = new PopupWithForm('.pop-up-container_type_card-add', addCardSubmit);
popupWithformCardsAdd.setEventListeners();

const userInfo = new UserInfo({userNameSelector: nameValue, userInfoSelector: jobValue});
