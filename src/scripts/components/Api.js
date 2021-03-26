export default class Api {
  constructor(params){
    
  }

  getUserInfo() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-21/users/me', {
      headers: {
        authorization: 'ead2bc08-76d8-467e-bb45-32710c654284'
      }
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(data => {
      return data
    })
    .catch(err => {console.log(err)})
  }


  getDefaultCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-21/cards', {
      headers: {
        authorization: 'ead2bc08-76d8-467e-bb45-32710c654284'
      }
    })
    .then(res => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(cards => {
      return cards
    })
    .catch(err => {console.log(err)})
  }

  patchUserInfo(name, about) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-21/users/me', {
      method: 'PATCH',
      headers: {
        authorization: 'ead2bc08-76d8-467e-bb45-32710c654284',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => {console.log(err)})
  }

  postCard(cardName, cardLink) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-21/cards', {
      method: 'POST',
      headers: {
        authorization: 'ead2bc08-76d8-467e-bb45-32710c654284',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: cardName,
        link: cardLink
      })
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => {console.log(err)})
  }

  deleteCard(card) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-21/cards/${card._id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'ead2bc08-76d8-467e-bb45-32710c654284',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch(err => {console.log(err)});
  }

  patchAvatar(link) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-21/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: 'ead2bc08-76d8-467e-bb45-32710c654284',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(res => {
      if(!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch(err => {console.log(err)})
  }

  addlikeCard(card) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-21/cards/likes/${card._id}`, {
      method: 'PUT',
      headers: {
        authorization: 'ead2bc08-76d8-467e-bb45-32710c654284',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => {console.log(err)})
  }

  removeLikeCard(card) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-21/cards/likes/${card._id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'ead2bc08-76d8-467e-bb45-32710c654284',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch(err => {console.log(err)})
  }
}