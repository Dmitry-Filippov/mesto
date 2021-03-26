import Popup from "./Popup";

export default class PopupWithSubmit extends Popup {
  constructor (popupSelector, handleFormSubmit) {
		super(popupSelector);
		this._handleFormSubmit = handleFormSubmit;
	}

	open(card, delButtonElement) {
		super.open();
		this._card = card;
		this._cardElement = delButtonElement.closest('.elements__item');
		console.log(this._card);
	}

	setEventListeners() {
		super.setEventListeners();
		this._popupElement.querySelector('.pop-up__form').addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._handleFormSubmit(this._card, this._cardElement);
			super.close();
		})
	}
}