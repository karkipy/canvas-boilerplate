class Ryu extends GameObject {
  constructor(indicator){
    super(indicator);
    this.indicator = indicator;
    this.x = SCREEN_WIDTH / 2;
    this.y = SCREEN_HEIGHT / 2;
    this.animationId = 0;
  }

  drawImage() {
    // let ryuDimension = this.dimension; // has ryu's all dimension
    // let idealDimension = ryuDimension[IDEAL]; // retrive ideal position of ryu
    // let renderDimension = updateSpritePosition(idealDimension, this.x, this.y);
    //   // updates the x and y position accordingly
    // SpriteRenderer(this.image, renderDimension);

    ctx.drawImage(this.image, 1309.923, 440.039, 107, 128, 0, 0, 107, 128); //
    ctx.drawImage(this.image, 1.995 + 109 * 0, 570.001, 107, 128, 200, 0, 107, 128);
    ctx.drawImage(this.image, 1.995 + 109 * 1, 570.001, 107, 128, 400, 0, 107, 128);
    ctx.drawImage(this.image, 1.995 + 109 * 2 , 570.001, 107, 128, 0, 200, 107, 128);
    ctx.drawImage(this.image, 1.995 + 109 * 3 , 570.001, 107, 128, 400, 200, 107, 128);
    ctx.drawImage(this.image, 1.995 + 109 * 4 , 570.001, 107, 128, 0, 400, 107, 128);
    ctx.drawImage(this.image, 1.995 + 109 * 5 , 570.001, 107, 128, 400, 400, 107, 128);
    ctx.drawImage(this.image, 1.995 + 109 * 6 , 570.001, 107, 128, 0, 600, 107, 128);
    ctx.drawImage(this.image, 1.995 + 109 * 7 , 570.001, 107, 128, 400, 600, 107, 128);
    ctx.drawImage(this.image, 1.995 + 109 * 8 , 570.001, 107, 128, 0, 800, 107, 128);
    ctx.drawImage(this.image, 1.995 + 109 * 9 , 570.001, 107, 128, 0, 800, 107, 128);

  }
}