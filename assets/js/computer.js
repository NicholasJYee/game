function moveCat1 () {
  var i = Math.floor((Math.random() * 17) + 1);
  if (i === 1) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = 0;
    cat1.animations.stop();
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
    cat1.body.velocity.y = 0;
    cat1.animations.play('forward_jump');    
  } else if (i === 11) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = 0;
    cat1.animations.play('backward_jump');
  } else if (i === 12) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = 0;    
    cat1.animations.play('backward_nap');
  } else if (i === 13) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = 0;    
    cat1.animations.play('forward_head_tilt');
  } else if (i === 14) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = 0;    
    cat1.animations.play('forward_nap');
  } else if (i === 15) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = 0;    
    cat1.animations.play('backward_head_tilt');
  } else if (i === 16) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = 0;    
    cat1.animations.play('lay_facing_side');
  } else if (i === 17) {
    cat1.body.velocity.x = 0;
    cat1.body.velocity.y = 0;    
    cat1.animations.play('lay_facing_forward');
  }
}

function moveCat2 () {
  var i = Math.floor((Math.random() * 17) + 1);
  if (i === 1) {
    cat2.body.velocity.x = 0;
    cat2.body.velocity.y = 0;
    cat2.animations.stop();
  } else if (i === 2) {
    cat2.body.velocity.x = 0;
    cat2.body.velocity.y = -50; 
    cat2.animations.play('up');    
  } else if (i === 3) {
    cat2.body.velocity.x = 50;
    cat2.body.velocity.y = -50; 
    cat2.animations.play('upright');    
  } else if (i === 4) {
    cat2.body.velocity.x = 50;
    cat2.body.velocity.y = 0; 
    cat2.animations.play('right');    
  } else if (i === 5) {
    cat2.body.velocity.x = 50;
    cat2.body.velocity.y = 50; 
    cat2.animations.play('downright');    
  } else if (i === 6) {
    cat2.body.velocity.x = 0;
    cat2.body.velocity.y = 50; 
    cat2.animations.play('down');
  } else if (i === 7) {
    cat2.body.velocity.x = -50;
    cat2.body.velocity.y = 50; 
    cat2.animations.play('downleft');    
  } else if (i === 8) {
    cat2.body.velocity.x = -50;
    cat2.body.velocity.y = 0; 
    cat2.animations.play('left');    
  } else if (i === 9) {
    cat2.body.velocity.x = -50;
    cat2.body.velocity.y = -50; 
    cat2.animations.play('upleft');
  } else if (i === 10) {
    cat2.body.velocity.x = 0;
    cat2.body.velocity.y = 0;
    cat2.animations.play('forward_jump');    
  } else if (i === 11) {
    cat2.body.velocity.x = 0;
    cat2.body.velocity.y = 0;
    cat2.animations.play('backward_jump');
  } else if (i === 12) {
    cat2.body.velocity.x = 0;
    cat2.body.velocity.y = 0;    
    cat2.animations.play('backward_nap');
  } else if (i === 13) {
    cat2.body.velocity.x = 0;
    cat2.body.velocity.y = 0;    
    cat2.animations.play('forward_head_tilt');
  } else if (i === 14) {
    cat2.body.velocity.x = 0;
    cat2.body.velocity.y = 0;    
    cat2.animations.play('forward_nap');
  } else if (i === 15) {
    cat2.body.velocity.x = 0;
    cat2.body.velocity.y = 0;    
    cat2.animations.play('backward_head_tilt');
  } else if (i === 16) {
    cat2.body.velocity.x = 0;
    cat2.body.velocity.y = 0;    
    cat2.animations.play('lay_facing_side');
  } else if (i === 17) {
    cat2.body.velocity.x = 0;
    cat2.body.velocity.y = 0;    
    cat2.animations.play('lay_facing_forward');
  }
}

function moveCat3 (argument) {
  var i = Math.floor((Math.random() * 17) + 1);
  if (i === 1) {
    cat3.body.velocity.x = 0;
    cat3.body.velocity.y = 0;
    cat3.animations.stop();
  } else if (i === 2) {
    cat3.body.velocity.x = 0;
    cat3.body.velocity.y = -50; 
    cat3.animations.play('up');    
  } else if (i === 3) {
    cat3.body.velocity.x = 50;
    cat3.body.velocity.y = -50; 
    cat3.animations.play('upright');    
  } else if (i === 4) {
    cat3.body.velocity.x = 50;
    cat3.body.velocity.y = 0; 
    cat3.animations.play('right');    
  } else if (i === 5) {
    cat3.body.velocity.x = 50;
    cat3.body.velocity.y = 50; 
    cat3.animations.play('downright');    
  } else if (i === 6) {
    cat3.body.velocity.x = 0;
    cat3.body.velocity.y = 50; 
    cat3.animations.play('down');
  } else if (i === 7) {
    cat3.body.velocity.x = -50;
    cat3.body.velocity.y = 50; 
    cat3.animations.play('downleft');    
  } else if (i === 8) {
    cat3.body.velocity.x = -50;
    cat3.body.velocity.y = 0; 
    cat3.animations.play('left');    
  } else if (i === 9) {
    cat3.body.velocity.x = -50;
    cat3.body.velocity.y = -50; 
    cat3.animations.play('upleft');
  } else if (i === 10) {
    cat3.body.velocity.x = 0;
    cat3.body.velocity.y = 0;
    cat3.animations.play('forward_jump');    
  } else if (i === 11) {
    cat3.body.velocity.x = 0;
    cat3.body.velocity.y = 0;
    cat3.animations.play('backward_jump');
  } else if (i === 12) {
    cat3.body.velocity.x = 0;
    cat3.body.velocity.y = 0;    
    cat3.animations.play('backward_nap');
  } else if (i === 13) {
    cat3.body.velocity.x = 0;
    cat3.body.velocity.y = 0;    
    cat3.animations.play('forward_head_tilt');
  } else if (i === 14) {
    cat3.body.velocity.x = 0;
    cat3.body.velocity.y = 0;    
    cat3.animations.play('forward_nap');
  } else if (i === 15) {
    cat3.body.velocity.x = 0;
    cat3.body.velocity.y = 0;    
    cat3.animations.play('backward_head_tilt');
  } else if (i === 16) {
    cat3.body.velocity.x = 0;
    cat3.body.velocity.y = 0;    
    cat3.animations.play('lay_facing_side');
  } else if (i === 17) {
    cat3.body.velocity.x = 0;
    cat3.body.velocity.y = 0;    
    cat3.animations.play('lay_facing_forward');
  }
}