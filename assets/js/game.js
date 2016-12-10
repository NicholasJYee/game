"use strict";
var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update });
var player;

var cursors = {};



function preload () {
 game.load.image('sky', 'assets/images/textures/sky.png');
 game.load.spritesheet('player', 'assets/images/sprites/male.png', 61, 121);
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
  player.frame = 7;
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
    player.animations.stop();
  }

}