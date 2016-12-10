"use strict";
var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update });
var player;
var cat1;
var cat2;
var cat3;

var cursors = {};

function preload () {
 game.load.image('sky', 'assets/images/textures/sky.png');
 game.load.spritesheet('cat1', 'assets/images/sprites/male.png', 61, 121);
 game.load.spritesheet('player', 'assets/images/sprites/cat1.png', 32, 32);
 game.load.spritesheet('cat2', 'assets/images/sprites/cat2.png', 32, 32);
 game.load.spritesheet('cat3', 'assets/images/sprites/cat3.png', 32, 32);  
}



function create () {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  // cursors = game.input.keyboard.createCursorKeys();
  cursors.down = game.input.keyboard.addKey(Phaser.Keyboard.S);
  cursors.left = game.input.keyboard.addKey(Phaser.Keyboard.A);
  cursors.right = game.input.keyboard.addKey(Phaser.Keyboard.D);
  cursors.up = game.input.keyboard.addKey(Phaser.Keyboard.W);

  game.add.sprite(0, 0, 'sky');

  player = game.add.sprite(0,0, 'player');
  game.physics.arcade.enable(player);
  player.animations.add('downleft', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);  
  player.animations.add('down', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
  player.animations.add('downright', [16, 17, 18, 19, 20, 21, 22, 23], 10, true);
  player.animations.add('left', [24, 25, 26, 27, 28, 29, 30, 31], 10, true);
  player.animations.add('upleft', [32, 33, 34, 35, 36, 37, 38, 39], 10, true);
  player.animations.add('right', [40, 41, 42, 43, 44, 45, 46, 47], 10, true);
  player.animations.add('upright', [48, 49, 50, 51, 52, 53, 54, 55], 10, true);
  player.animations.add('up', [56, 57, 58, 59, 60, 61, 62, 63], 10, true);
  player.body.collideWorldBounds = true;

  cat1 = game.add.sprite(50,50, 'cat1');
  cat2 = game.add.sprite(100,100, 'cat2');
  cat3 = game.add.sprite(150,150, 'cat3');
  player.animations.add('downleft', [3, 4, 5], 10, true);  
  player.animations.add('down', [0, 1, 2], 10, true);
  player.animations.add('downright', [27, 28, 29], 10, true);
  player.animations.add('left', [12, 13, 14], 10, true);
  player.animations.add('upleft', [15, 16, 17], 10, true);
  player.animations.add('right', [24, 25, 26], 10, true);
  player.animations.add('upright', [39, 40, 41], 10, true);
  player.animations.add('up', [36, 37, 38], 10, true);
  player.animations.add('forward_jump', [6, 7, 8], 5, false);
  player.animations.add('backward_jump', [42, 43, 44], 5, false);
  player.animations.add('backward_nap', [48, 49, 50], 2, true);
  player.animations.add('forward_head_tilt', [54, 55, 56], 3, false);
  player.animations.add('forward_nap', [60, 61, 62], 2, true);
  player.animations.add('backward_head_tilt', [66, 67, 68], 3, false);
  player.animations.add('lay_facing_side', [72, 73, 74], 2, true);
  player.animations.add('lay_facing_forward', [84, 85, 86], 2, true);


  game.physics.arcade.enable(cat1);
  game.physics.arcade.enable(cat2);
  game.physics.arcade.enable(cat3);
  cat1.body.collideWorldBounds = true;
  cat2.body.collideWorldBounds = true;
  cat3.body.collideWorldBounds = true;
  game.time.events.repeat(Phaser.Timer.SECOND * Math.floor((Math.random() * 15) + 1), 10, moveCat1, game);
  game.time.events.repeat(Phaser.Timer.SECOND * Math.floor((Math.random() * 15) + 1), 10, moveCat2, game);
  game.time.events.repeat(Phaser.Timer.SECOND * Math.floor((Math.random() * 15) + 1), 10, moveCat3, game);

}

function update () {
  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  if (cursors.up.isDown && cursors.right.isDown) {
    player.body.velocity.x = 100;
    player.body.velocity.y = -100;
    player.animations.play('upright');
  } else if (cursors.down.isDown && cursors.right.isDown) {
    player.body.velocity.x = 100;
    player.body.velocity.y = 100;
    player.animations.play('downright');
  } else if (cursors.down.isDown && cursors.left.isDown) {
    player.body.velocity.x = -100;
    player.body.velocity.y = 100;
    player.animations.play('downleft');
  } else if (cursors.up.isDown && cursors.left.isDown) {
    player.body.velocity.x = -100
    player.body.velocity.y = -100;
    player.animations.play('upleft');
  } else if (cursors.down.isDown) {
    player.body.velocity.y = 100;
    player.animations.play('down');
  } else if (cursors.left.isDown) {
    player.body.velocity.x = -100;
    player.animations.play('left');
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 100;
    player.animations.play('right');
  } else if (cursors.up.isDown) {
    player.body.velocity.y = -100;
    player.animations.play('up');
  } else {
    // player.animations.stop();
    player.animations.play('lay_facing_forward');
  }

}