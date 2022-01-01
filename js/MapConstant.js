// Map constant to map the sprite accordingly and update the positon of x and y in canvas when needed to be drawn only

const UP = 'UP';
const DOWN = 'DOWN';
const LEFT = 'LEFT';
const RIGHT = 'RIGHT';
const IDEAL = 'IDEAL';
const DEAD = 'DEAD';

const MAP_IMAGE =  {
  [PLAYER_INDICATOR]: {
    [IDEAL]: [getSpriteObject(64, 0, 30, 30, 0, 0, 16, 16)],
    [UP]: [getSpriteObject(159, 0, 30, 30, 0, 0, 16, 16), getSpriteObject(191, 0, 30, 30, 0, 0, 16, 16)],
    [DOWN]: [getSpriteObject(223, 0, 30, 30, 0, 0, 16, 16), getSpriteObject(255, 0, 30, 30, 0, 0, 16, 16)],
    [LEFT]: [getSpriteObject(96, 0, 30, 30, 0, 0, 16, 16), getSpriteObject(128, 0, 30, 30, 0, 0, 16, 16)],
    [RIGHT]: [getSpriteObject(0, 0, 30, 30, 0, 0, 16, 16), getSpriteObject(32, 0, 30, 30, 0, 0, 16, 16)],
    [DEAD]: [
      getSpriteObject(0, 30, 30, 30, 0, 0, 16, 16),
      getSpriteObject(32, 30, 30, 30, 0, 0, 16, 16),
      getSpriteObject(64, 30, 30, 30, 0, 0, 16, 16),
      getSpriteObject(96, 30, 30, 30, 0, 0, 16, 16),
      getSpriteObject(128, 30, 30, 30, 0, 0, 16, 16),
      getSpriteObject(159, 30, 30, 30, 0, 0, 16, 16),
      getSpriteObject(191, 30, 30, 30, 0, 0, 16, 16),
      getSpriteObject(223, 30, 30, 30, 0, 0, 16, 16),
      getSpriteObject(255, 30, 30, 30, 0, 0, 16, 16),
      getSpriteObject(288, 30, 30, 30, 0, 0, 16, 16),
      getSpriteObject(320, 30, 30, 30, 0, 0, 16, 16),
    ],
  },
  [BLINKY_INDICATOR]: {
    [RIGHT]: [getSpriteObject(0, 60, 30, 30, 0, 0, 16, 16), getSpriteObject(32, 60, 30, 30, 0, 0, 16, 16)],
    [LEFT]: [getSpriteObject(96, 60, 30, 30, 0, 0, 16, 16), getSpriteObject(128, 60, 30, 30, 0, 0, 16, 16)],
    [UP]: [getSpriteObject(159, 60, 30, 30, 0, 0, 16, 16), getSpriteObject(191, 60, 30, 30, 0, 0, 16, 16)],
    [DOWN]: [getSpriteObject(223, 60, 30, 30, 0, 0, 16, 16), getSpriteObject(255, 60, 30, 30, 0, 0, 16, 16)],
  },
  [PINKY_INDICATOR]: {
    [RIGHT]: [getSpriteObject(0, 90, 30, 30, 0, 0, 16, 16), getSpriteObject(32, 90, 30, 30, 0, 0, 16, 16)],
    [LEFT]: [getSpriteObject(96, 90, 30, 30, 0, 0, 16, 16), getSpriteObject(128, 90, 30, 30, 0, 0, 16, 16)],
    [UP]: [getSpriteObject(159, 90, 30, 30, 0, 0, 16, 16), getSpriteObject(191, 90, 30, 30, 0, 0, 16, 16)],
    [DOWN]: [getSpriteObject(223, 90, 30, 30, 0, 0, 16, 16), getSpriteObject(255, 90, 30, 30, 0, 0, 16, 16)],
  }, 
  [INKY_INDICATOR]: {
    [RIGHT]: [getSpriteObject(0, 120, 30, 30, 0, 0, 16, 16), getSpriteObject(32, 120, 30, 30, 0, 0, 16, 16)],
    [LEFT]: [getSpriteObject(96, 120, 30, 30, 0, 0, 16, 16), getSpriteObject(128, 120, 30, 30, 0, 0, 16, 16)],
    [UP]: [getSpriteObject(159, 120, 30, 30, 0, 0, 16, 16), getSpriteObject(191, 120, 30, 30, 0, 0, 16, 16)],
    [DOWN]: [getSpriteObject(223, 120, 30, 30, 0, 0, 16, 16), getSpriteObject(255, 120, 30, 30, 0, 0, 16, 16)],
  },
  [CLYDE_INDICATOR]: {
    [RIGHT]: [getSpriteObject(0, 150, 30, 30, 0, 0, 16, 16), getSpriteObject(32, 150, 30, 30, 0, 0, 16, 16)],
    [LEFT]: [getSpriteObject(96, 150, 30, 30, 0, 0, 16, 16), getSpriteObject(128, 150, 30, 30, 0, 0, 16, 16)],
    [UP]: [getSpriteObject(159, 150, 30, 30, 0, 0, 16, 16), getSpriteObject(191, 150, 30, 30, 0, 0, 16, 16)],
    [DOWN]: [getSpriteObject(223, 150, 30, 30, 0, 0, 16, 16), getSpriteObject(255, 150, 30, 30, 0, 0, 16, 16)],
  }
}

