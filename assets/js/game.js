"use strict";
var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update });
var player;
var cat1;
var cat2;
var cat3;

var cursors = {};

function preload () {
 game.load.image('sky', 'assets/images/textures/sky.png');
 game.load.spritesheet('player', 'assets/images/sprites/male.png', 61, 121);
 game.load.spritesheet('cat1', 'assets/images/sprites/cat1.png', 32, 32);
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

  cat1 = game.add.sprite(0,0, 'cat1');
  cat2 = game.add.sprite(50,0, 'cat2');
  cat3 = game.add.sprite(100,0, 'cat3');
  game.physics.arcade.enable(cat1);
  game.physics.arcade.enable(cat2);
  game.physics.arcade.enable(cat3);

  game.time.events.repeat(Phaser.Timer.SECOND * Math.floor((Math.random() * 3) + 1), 10, moveCat, game);
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