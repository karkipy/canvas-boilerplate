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
  if (evt.key === 'h') {
    stopAudio(RYU_INDICATOR);
    playAudio(RYU_INDICATOR);
    ryu.hurricaneKick();
  }
});