class Seach {
  selectors = {
    root: "[data-js-search]",
    input: "[data-js-search-input]",
    placeholder: "[data-js-search-placeholder]",
  };

  stateClasses = {
    isActive: "is-active",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.inputElement = this.rootElement.querySelector(this.selectors.input);
    this.placeholderElement = this.rootElement.querySelector(
      this.selectors.placeholder
    );

    this.bindEvents();
  }

  hasLetter = () => {
    this.inputElement.value.length > 0
      ? this.placeholderElement.classList.add(this.stateClasses.isActive)
      : this.placeholderElement.classList.remove(this.stateClasses.isActive);
  };

  bindEvents() {
    this.inputElement.addEventListener("input", this.hasLetter);
  }
}

export default Seach;
