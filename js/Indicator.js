// create unique indicator each time for unique element to be used

function getUniqueIndicator() {
  return new Date().getTime() + Math.floor(Math.random() * (1000 - 0) + 0);
}

// Add indicators here and register them in Constant
const PLAYER_INDICATOR = getUniqueIndicator();
const BACKGROUND_INDICATOR = getUniqueIndicator();
const DOT_INDICATOR = getUniqueIndicator();
const ENEMY_INDICATOR = getUniqueIndicator();
const BLINKY_INDICATOR = getUniqueIndicator();
const PINKY_INDICATOR = getUniqueIndicator();
const INKY_INDICATOR = getUniqueIndicator();
const CLYDE_INDICATOR = getUniqueIndicator();