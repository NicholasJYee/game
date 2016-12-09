"use strict";
var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update });
var player;

var cursors;

function preload () {
 game.load.image('sky', 'assets/images/textures/sky.png');
 game.load.spritesheet('player', 'assets/images/sprites/hungary.png', 32, 48);

}



function create () {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();

  game.add.sprite(0, 0, 'sky');

  player = game.add.sprite(0,0, 'player');
  game.physics.arcade.enable(player);
  player.animations.add('down', [0, 1, 2, 3], 10, true);
  player.animations.add('left', [4, 5, 6, 7], 10, true);
  player.animations.add('right', [8, 9, 10, 11], 10, true);
  player.animations.add('up', [12, 13, 14, 15], 10, true);    
  player.body.collideWorldBounds = true;

}

function update () {
  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  if (cursors.down.isDown) {
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