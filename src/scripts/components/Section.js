export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items.reverse();
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }
  renderItems() {
    this._items.forEach(item => {
      this.addItem(this._renderer(item));
    });
  }

  addItem(element) {
    this._containerSelector.prepend(element);
  }
}
