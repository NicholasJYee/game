"use strict";
var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update });
var player;
var platforms;

function preload () {
 game.load.image('sky', 'assets/images/textures/sky.png');
 game.load.spritesheet('player', 'assets/images/characters/sprites-funny-bunny-ios-isometric-tiles.jpg', 32, 48);

}



function create () {

}

function update () {

}