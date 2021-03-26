import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js'
import PopupWithSubmit from '../scripts/components/PopupWithSubmit.js';
import {profileButton, cardsAddButton, nameValue, jobValue, elements, formElement, nameInput, 
  jobInput, popUpCardsAddForm, cardNameInput, cardLinkInput, formObj, cardTemplate, othersCardTemplate, profileAvatar, 
  avatarLink, avatarElement, avatarForm, profileSubmitButton, avatarSubmitButton, cardsAddSubmitButton} from '../scripts/utils/constants.js';
import './index.css';

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileSubmitButton.textContent = 'Загрузка...';
  api.patchUserInfo(nameInput.value, jobInput.value);
  userInfo.setUserInfo(nameInput.value, jobInput.value);
  profileSubmitButton.textContent = 'Сохранить';
}

function createCard(item) {
  if(item.owner._id === '45c9f3fe8b1e70c890ea09c2') {
    return new Card(item, cardTemplate, handleCardClick, handleDelClick, handleLikeClick, handleRemoveLikeClick).createCard();
  } else {
    return new Card(item, othersCardTemplate, handleCardClick, handleDelClick, handleLikeClick, handleRemoveLikeClick).createCard();
  }
}

function addCardSubmit(evt) {
  evt.preventDefault();
  cardsAddSubmitButton.textContent = 'Загрузка...';
  api.postCard(cardNameInput.value, cardLinkInput.value)
    .then(card => {
      const newCard = new Section({items: [card], renderer: createCard}, elements);
      newCard.renderItems();
    })
  cardsAddSubmitButton.textContent = 'Сохранить';
};


function handleCardClick(name, link) {
  popupWithImage.open(link, name);
}

function handleDelClick(card, delButtonElement) {
  popupWithDelSubmit.open(card, delButtonElement);
}


function handleDeleteSubmit(cardItem, cardElement) {
  api.deleteCard(cardItem);
  cardElement.remove();
}

function handleAvatarUpdate(evt) {
  evt.preventDefault();
  avatarSubmitButton.textContent = 'Загрузка...';
  api.patchAvatar(avatarLink.value);
  profileAvatar.src = avatarLink.value;
  avatarSubmitButton.textContent = 'Сохранить';
  popupWithFormAvatar.close();
}

function handleLikeClick(cardItem) {
  api.addlikeCard(cardItem);
}

function handleRemoveLikeClick(cardItem) {
  api.removeLikeCard(cardItem);
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

avatarElement.addEventListener('click', () => {
  popupWithFormAvatar.open();
})

const profileForm = new FormValidator(formObj, formElement);
profileForm.enableValidation();
const cardsAddForm = new FormValidator(formObj, popUpCardsAddForm);
cardsAddForm.enableValidation();
const avatarAddForm = new FormValidator(formObj, avatarForm);
avatarAddForm.enableValidation();


const popupWithImage = new PopupWithImage('.pop-up-container_type_image');
popupWithImage.setEventListeners();

const popupWithFormProfile = new PopupWithForm('.pop-up-container_type_profile', handleFormSubmit);
popupWithFormProfile.setEventListeners();

const popupWithFormAvatar = new PopupWithForm('.pop-up-container_type_avatar', handleAvatarUpdate);
popupWithFormAvatar.setEventListeners();

const popupWithformCardsAdd = new PopupWithForm('.pop-up-container_type_card-add', addCardSubmit);
popupWithformCardsAdd.setEventListeners();

const popupWithDelSubmit = new PopupWithSubmit('.pop-up-container_type_cards-del', handleDeleteSubmit);
popupWithDelSubmit.setEventListeners();

const userInfo = new UserInfo({userNameSelector: nameValue, userInfoSelector: jobValue});

const api = new Api();

api.getUserInfo()
  .then(data => {
    profileAvatar.src = data.avatar;
    nameValue.textContent = data.name;
    jobValue.textContent = data.about;
  })

api.getDefaultCards()
  .then(cards => {
    const defaultCards = new Section({items: cards, renderer: createCard}, elements);
    defaultCards.renderItems();
  })
