import {nameValue, jobValue} from '../utils/constants.js'

export default class UserInfo {
  constructor({userNameSelector, userInfoSelector}) {
    this._userNameSelector = userNameSelector;
    this._userInfoSelector = userInfoSelector;
  }

  getUserInfo() {
    return {
      userName: nameValue.textContent,
      userInfo: jobValue.textContent
    }
  }

  setUserInfo(userName, userInfo) {
    this._userNameSelector.textContent = userName;
    this._userInfoSelector.textContent = userInfo;
  }
}