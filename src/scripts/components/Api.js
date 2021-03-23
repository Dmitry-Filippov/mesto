export default class Api {
  constructor(params) {
    this._url = params.url;
    this._name = params.name;
    this._about =params.about;
  }

  getUserInfo() {
    return fetch(this._url, {
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
    return fetch(this._url, {
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
    return fetch(this._url, {
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
    return fetch(this._url, {
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
      console.log(res)
      if(res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => {console.log(err)})
  }
}