const player = new Player(PLAYER_INDICATOR);


function initAll() {
  player.setImage();
}

function clearAll() {
  ctx.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
}

function mainLoop() {
  clearAll();
  animationReq = requestAnimationFrame(mainLoop);
}

initAll();