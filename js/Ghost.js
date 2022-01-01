// Scatter for 7 seconds, then Chase for 20 seconds.
// Scatter for 7 seconds, then Chase for 20 seconds.
// Scatter for 5 seconds, then Chase for 20 seconds.
// Scatter for 5 seconds, then switch to Chase mode permanently.

const SCATTER = 'SCATTER';
const CHASE = 'CHASE';
const FRIGHTENED = 'FRIGHTENED';

class Ghost {
  constructor(indicator, name, pacman) {
    this.name = name;
    this.mode = SCATTER;
    this.pacman = pacman;
    this.indicator = indicator;
    this.direction = RIGHT;
  }

  setImage() {
    this.image = loadedImages[ENEMY_INDICATOR];
  }

  render() {

  }
}