class Ryu extends GameObject {
  constructor(indicator){
    super(indicator);
    this.indicator = indicator;
    this.x = SCREEN_WIDTH / 2;
    this.y = SCREEN_HEIGHT / 2;
    this.animationId = 0;
  }

  drawImage() {
    let ryuDimension = this.dimension; // has ryu's all dimension
    let renderDimension = {};
    if (this.kick === true) {
      let kickDimension = ryuDimension[KICK][this.index];
      renderDimension = updateSpritePosition(kickDimension, this.x, this.y);
      SpriteRenderer(this.image, renderDimension);
      if(this.animationId % 4 === 0) {
        this.index +=1 ;
        if (this.index === 1) {
          this.y -= 40;
        }
      }
      this.x -= 3;
      if (this.x < 10) {
        this.x = 10; // dont cross the border.
      }

      if (this.index > ryuDimension[KICK].length - 1) {
        this.y += 40;
        this.kick = false;
        this.animationId = 0;
        this.index = 0;
      }
      this.animationId +=1;
    } else {
      let idealDimension = ryuDimension[IDEAL]; // retrive ideal position of ryu
        renderDimension = updateSpritePosition(idealDimension, this.x + 30, this.y + 20);
        // x + 30 and y + 20 because of image inconsistency
        // updates the x and y position accordingly
        SpriteRenderer(this.image, renderDimension);
    }
  }

  hurricaneKick() {
    if (this.kick !== true) {
      this.kick = true;
      this.index = 0;
      // index for the image that are in array
    }
  }
}