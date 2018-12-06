const ryu = new Ryu(RYU_INDICATOR);


function initAll() {
  ryu.setImage();
}

function clearAll() {
  ctx.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
  ctx.fillStyle = '#00FF50';
  ctx.fillRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
}

function mainLoop() {
  clearAll();
  ryu.drawImage();
  animationReq = requestAnimationFrame(mainLoop);
  animationId +=1; // keep track of frames
}

initAll();