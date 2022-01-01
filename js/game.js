const player = new Player(PLAYER_INDICATOR);
const background = new Background(ctx, BACKGROUND_INDICATOR);


const tiles = [];
function initAll() {
  player.setImage();
  background.setImage();
  tiles.forEach(t => {
    t.setImage();
  })
}

function clearAll() {
  ctx.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
}





function buildWorld()  {
  PACMAN_MAP.forEach((cols, y) => {
    cols.forEach((col, x) => {
      tiles.push(new Tile(ctx, x, y, col, DOT_INDICATOR))
    })
  })
}

buildWorld();

function mainLoop() {
  clearAll();
  tiles.forEach((t) => {
    t.renderTile();
  });
  background.render();
  player.render();
  animationReq = requestAnimationFrame(mainLoop);
}

initAll();