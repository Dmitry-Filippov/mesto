import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupMainImage = this._popupElement.querySelector('.pop-up__image');
    this._popupSubtitle = this._popupElement.querySelector('.pop-up__text');
  }

  open(link, name) {
    this._popupMainImage.src = link;
    this._popupMainImage.alt = name;
    this._popupSubtitle.textContent = name;
    super.open();
  }
}
