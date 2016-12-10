function moveCat1 () {
  // var i = Math.floor((Math.random() * 16) + 1);
  var i = 10;
  if (i === 1) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = 0;
    player.animations.stop();
  } else if (i === 2) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = -50; 
    cat1.animations.play('up');    
  } else if (i === 3) {
    cat1.body.velocity.x = 50;
    cat1.body.velocity.y = -50; 
    cat1.animations.play('upright');    
  } else if (i === 4) {
    cat1.body.velocity.x = 50;
    cat1.body.velocity.y = 0; 
    cat1.animations.play('right');    
  } else if (i === 5) {
    cat1.body.velocity.x = 50;
    cat1.body.velocity.y = 50; 
    cat1.animations.play('downright');    
  } else if (i === 6) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = 50; 
    cat1.animations.play('down');
  } else if (i === 7) {
    cat1.body.velocity.x = -50;
    cat1.body.velocity.y = 50; 
    cat1.animations.play('downleft');    
  } else if (i === 8) {
    cat1.body.velocity.x = -50;
    cat1.body.velocity.y = 0; 
    cat1.animations.play('left');    
  } else if (i === 9) {
    cat1.body.velocity.x = -50;
    cat1.body.velocity.y = -50; 
    cat1.animations.play('upleft');
  } else if (i === 10) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = -50; 
  } else if (i === 11) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = -50; 
  } else if (i === 12) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = -50; 
  } else if (i === 13) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = -50; 
  } else if (i === 14) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = -50; 
  } else if (i === 15) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = -50; 
  } else if (i === 16) {
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