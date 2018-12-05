const player = new Player(PLAYER_INDICATOR);


function initAll() {
  player.setImage();
}

function mainLoop() {
  animationReq = requestAnimationFrame(mainLoop);
}

initAll();