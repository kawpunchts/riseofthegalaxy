import 'phaser';
import GameScene from './scenes/GameScene';
<<<<<<< HEAD
=======
import Start from './scenes/Start';
import Howtoplay from './scenes/HowToPlay';
>>>>>>> master

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 400,
    height: 240,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
<<<<<<< HEAD
        GameScene
=======
        Start,
        GameScene,
        Howtoplay
        
>>>>>>> master
    ]
};

const game = new Phaser.Game(config);