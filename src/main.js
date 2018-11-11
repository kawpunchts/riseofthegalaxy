import 'phaser';
import GameScene from './scenes/GameScene';
import Start from './scenes/Start';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 400,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        Start,
        GameScene
    ]
};

const game = new Phaser.Game(config);