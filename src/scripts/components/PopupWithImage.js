import Popup from './Popup.js';
import {openedImage, imageText} from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(link, name) {
    openedImage.src = link;
    openedImage.alt = name;
    imageText.textContent = name;
    this._popupSelector.classList.add('pop-up-container_opened');
  }
}
