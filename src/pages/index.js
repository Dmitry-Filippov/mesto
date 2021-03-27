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
  api.patchUserInfo(nameInput.value, jobInput.value)
    .then(data => {
      console.log(data.name, data.about)
      userInfo.setUserInfo(data.name, data.about)
    })
    .then(() => {popupWithFormProfile.close()})
    .catch(err => {
      console.log(err)
    })
    .finally(() => {profileSubmitButton.textContent = 'Сохранить'})
}

function createCard(item) {
  if(item.owner._id === userInfo._id) {
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
    .then(() => {popupWithformCardsAdd.close()})
    .catch(err => {
      console.log(err)
    })
    .finally(() => {cardsAddSubmitButton.textContent = 'Сохранить'})
};


function handleCardClick(name, link) {
  popupWithImage.open(link, name);
}

function handleDelClick(card, delButtonElement) {
  popupWithDelSubmit.open(card, delButtonElement);
}


function handleDeleteSubmit(cardItem, cardElement) {
  api.deleteCard(cardItem)
    .then(() => {
      cardItem.deleteCard(cardElement);
    })
    .catch(err => {console.log(err)})
}

function handleAvatarUpdate(evt) {
  evt.preventDefault();
  avatarSubmitButton.textContent = 'Загрузка...';
  api.patchAvatar(avatarLink.value)
    .then(data => {
      profileAvatar.src = data.avatar;
    })
    .then(() => {popupWithFormAvatar.close()})
    .catch(err => {
      console.log(err);
    })
    .finally(() => {avatarSubmitButton.textContent = 'Сохранить'})
  
  
}

function handleLikeClick(evt, cardItem) {
  api.addlikeCard(cardItem)
    .then(() => {
      cardItem.toggleLike(evt)
    })
    .catch(err => {console.log(err)})
}

function handleRemoveLikeClick(evt, cardItem) {
  api.removeLikeCard(cardItem)
    .then(() => {
      cardItem.toggleLike(evt)
    })
    .catch(err => {console.log(err)})
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

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-21/',
  token: 'ead2bc08-76d8-467e-bb45-32710c654284'
});


  Promise.all([
    api.getUserInfo(),
    api.getDefaultCards()
  ])
    .then(values => {
      console.log(values)
      const userInformation = values[0];
      const cardsData = values[1];
      profileAvatar.src = userInformation.avatar;
      nameValue.textContent = userInformation.name;
      jobValue.textContent = userInformation.about;
      userInfo._id = userInformation._id;
      const defaultCards = new Section({items: cardsData, renderer: createCard}, elements);
      defaultCards.renderItems();
    })
    .catch(err => {
      console.log(err)
    })
