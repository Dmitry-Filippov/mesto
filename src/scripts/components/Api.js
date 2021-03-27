export default class Api {
  constructor(params) {
    this._url = params.url;
    this._authorizationToken = params.token;
  }

  _getResponseData(res) {
    console.log(res)
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
        headers: {
          authorization: this._authorizationToken
        }
      })
      .then((res) => {
        return this._getResponseData(res)
      })
  }


  getDefaultCards() {
    return fetch(`${this._url}cards`, {
        headers: {
          authorization: this._authorizationToken
        }
      })
      .then(res => {
        return this._getResponseData(res)
      })
  }

  patchUserInfo(name, about) {
    return fetch(`${this._url}users/me`, {
        method: 'PATCH',
        headers: {
          authorization: this._authorizationToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
      .then((res) => {
        return this._getResponseData(res)
      })
  }

  postCard(cardName, cardLink) {
    return fetch(`${this._url}cards`, {
        method: 'POST',
        headers: {
          authorization: this._authorizationToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: cardName,
          link: cardLink
        })
      })
      .then((res) => {
        return this._getResponseData(res)
      })
  }

  deleteCard(card) {
    return fetch(`${this._url}cards/${card._id}`, {
        method: 'DELETE',
        headers: {
          authorization: this._authorizationToken,
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        return this._getResponseData(res)
      })
  }

  patchAvatar(link) {
    return fetch(`${this._url}users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._authorizationToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: link
        })
      })
      .then(res => {
        return this._getResponseData(res)
      })
  }

  addlikeCard(card) {
    return fetch(`${this._url}cards/likes/${card._id}`, {
        method: 'PUT',
        headers: {
          authorization: this._authorizationToken,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        return this._getResponseData(res)
      })
  }

  removeLikeCard(card) {
    return fetch(`${this._url}cards/likes/${card._id}`, {
        method: 'DELETE',
        headers: {
          authorization: this._authorizationToken,
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        return this._getResponseData(res)
      })
  }
}