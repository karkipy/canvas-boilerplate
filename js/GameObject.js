class GameObject {
  constructor(indicator) {
    this.indicator = indicator;
    this.dimension = MAP_IMAGE[indicator];
  }
  setImage() {
    this.image = loadedImages[this.indicator];
  }
}