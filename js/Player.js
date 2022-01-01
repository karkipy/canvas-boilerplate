class Player extends GameObject {
  constructor(indicator) {
    super(indicator);
    this.x = 14;
    this.y = 28;
    this.type = IDEAL;
    this.animationId = 0;
    this.tracker = 0;
    this.direction = '';
  }

  render() {
    this.updateSprite();
    const currentDim = MAP_IMAGE[this.indicator][this.type];
    this.animationId =  this.animationId % currentDim.length;
    const dimension = updateSpritePosition(currentDim[this.animationId], this.x * 16, this.y * 16);
    if (this.tracker>20) {
      this.animationId ++;
      this.tracker = 0;
    }
    this.tracker++;
    SpriteRenderer(this.image, dimension);
  }

  updateSprite() {
    switch(this.direction) {
      case UP:
        if (!PACMAN_MAP[this.y - 1][this.x]) {
          this.y = this.y -1;
          this.type = UP;
        }
        break;
      case DOWN:
        if (!PACMAN_MAP[this.y + 1][this.x]) {
          this.y = this.y + 1;
          this.type = DOWN;
        }
        break;
      case LEFT:
        if (!PACMAN_MAP[this.y][this.x - 1]) {
          this.x = this.x - 1;
          this.type = LEFT;
        }
        break;
      case RIGHT:
        if (!PACMAN_MAP[this.y][this.x + 1]) {
          this.x = this.x + 1;
          this.type = RIGHT;
        }
        break;
    }

  }

  setDirection(direction) {
    this.direction = direction;
  }

}