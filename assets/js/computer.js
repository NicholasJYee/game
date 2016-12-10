function moveCat1 () {
  // var i = Math.floor((Math.random() * 15) + 1);
  var i = 2
  if (i === 1) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = 0;
    player.animations.stop();
  } else if (i === 2) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = -50; 
  }

}

function moveCat2 () {
  // body... 
}

function moveCat3 (argument) {
  // body... 
}