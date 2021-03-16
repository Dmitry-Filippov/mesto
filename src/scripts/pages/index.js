import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {cards} from '../utils/initial-cards.js';
import {profileButton, cardsAddButton, nameValue, jobValue, elements, popUpProfile, formElement, nameInput, 
  jobInput, popUpCardsAdd, popUpCardsAddForm, cardNameInput, cardLinkInput, popUpImage, formObj, cardTemplate} from '../utils/constants.js';
import '../../pages/index.css';

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
  new Section({items: [newCard], renderer: createCard}, elements).renderItems();
};

// function closeByOverlay (evt) {
//   if (evt.target.classList.contains('pop-up-container')) {
//     closePopUp(evt.target);
//   }
// }


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


const popupWithImage = new PopupWithImage(popUpImage);
popupWithImage.setEventListeners();

const popupWithFormProfile = new PopupWithForm(popUpProfile, handleFormSubmit);
popupWithFormProfile.setEventListeners();

const popupWithformCardsAdd = new PopupWithForm(popUpCardsAdd, addCardSubmit);
popupWithformCardsAdd.setEventListeners();

const userInfo = new UserInfo({userNameSelector: nameValue, userInfoSelector: jobValue});
