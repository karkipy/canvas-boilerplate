class Background {
  constructor(ctx, indicator) {
   this.ctx = ctx;
   this.indicator = indicator;
  }

  setImage() {
    this.image = loadedImages[this.indicator];
  }

  render() {
    this.ctx.fillStyle = "black"
    this.ctx.fillRect(0, 0, 448, 480);
    this.ctx.drawImage(this.image, 0, 48, 448, 497 , 0, 0, 448 , 480);
  }
}