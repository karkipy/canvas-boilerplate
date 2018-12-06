// Map constant to map the sprite accordingly and update the positon of x and y in canvas when needed to be drawn only

const IDEAL = 'IDEAL';
const KICK = 'KICK';


const MAP_IMAGE = {
  [RYU_INDICATOR]: {
    [IDEAL]: getSpriteObject(5, 5, 55, 99, 0, 0, 55, 100),
    [KICK]: [
      getSpriteObject(1309.923, 440.039, 107, 128, 0, 0, 107, 128),
      getSpriteObject(1.995 + 109 * 0, 570.001, 107, 128, 200, 0, 107, 128),
      getSpriteObject(1.995 + 109 * 1, 570.001, 107, 128, 400, 0, 107, 128),
      getSpriteObject(1.995 + 109 * 2 , 570.001, 107, 128, 0, 200, 107, 128),
      getSpriteObject(1.995 + 109 * 3 , 570.001, 107, 128, 400, 200, 107, 128),
      getSpriteObject(1.995 + 109 * 4 , 570.001, 107, 128, 0, 400, 107, 128),
      getSpriteObject(1.995 + 109 * 5 , 570.001, 107, 128, 400, 400, 107, 128),
      getSpriteObject(1.995 + 109 * 6 , 570.001, 107, 128, 0, 600, 107, 128),
      getSpriteObject(1.995 + 109 * 7 , 570.001, 107, 128, 400, 600, 107, 128),
      getSpriteObject(1.995 + 109 * 8 , 570.001, 107, 128, 0, 800, 107, 128),
      getSpriteObject(1.995 + 109 * 9 , 570.001, 107, 128, 0, 800, 107, 128),
    ],
  },
}
