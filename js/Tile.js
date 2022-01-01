class Tile {
  constructor(ctx, x, y, type, indicator) {
    this.x = 16 * x;
    this.y = 16 * y;
    this.type = type;
    this.ctx = ctx;
    this.height = 16;
    this.width = 16;
    this.indicator = indicator;
  }
  setImage() {
    this.image = loadedImages[this.indicator];
  }
  renderTile() {
    if (!this.type) {
      this.ctx.drawImage(this.image, 0, 0, 16, 16 , this.x, this.y, 16 , 16);
    }
  }
}