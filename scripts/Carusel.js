class Carusel {
  selectors = {
    root: "[data-js-slider]",
    container: "[data-js-slider-container]",
    prevBtn: "[data-js-slider-prev]",
    nextBtn: "[data-js-slider-next]",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.containerElement = this.rootElement.querySelector(
      this.selectors.container
    );
    this.prevBtnElement = this.rootElement.querySelector(
      this.selectors.prevBtn
    );
    this.nextBtnElement = this.rootElement.querySelector(
      this.selectors.nextBtn
    );
    this.slides = this.containerElement.children;

    this.curentPosition = 0;
    this.bindEvents();
  }

  moveSlides = (direction) => {
    const slideWidth = this.slides[0].offsetWidth;
    const gap = parseInt(getComputedStyle(this.containerElement).gap) || 0;
    const step = slideWidth + gap;

    if (direction === "next") {
      const maxPosition = -(
        this.containerElement.scrollWidth - this.rootElement.offsetWidth
      );
      this.curentPosition = Math.max(this.curentPosition - step, maxPosition);
    } else {
      this.curentPosition = Math.min(this.curentPosition + step, 0);
    }

    this.containerElement.style.transform = `translateX(${this.curentPosition}px)`;
  };

  bindEvents() {
    this.prevBtnElement.addEventListener("click", () =>
      this.moveSlides("prev")
    );

    this.nextBtnElement.addEventListener("click", () =>
      this.moveSlides("next")
    );
  }
}

export default Carusel;
