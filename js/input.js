canvas.addEventListener('mouse', function (evt) {
  console.log(evt)
});

canvas.addEventListener('click', function(evt) {
  console.log(evt);
});

canvas.addEventListener('keydown', function(evt){
  console.log(evt)
});

window.addEventListener('keydown', function(evt){
  console.log(evt.keyCode)
  switch (evt.keyCode) {
    case 37:
      player.setDirection(LEFT)
      break;
    case 38:
      player.setDirection(UP)
      break;
    case 39:
      player.setDirection(RIGHT)
      break;
    case 40:
      player.setDirection(DOWN)
      break;
  }
})