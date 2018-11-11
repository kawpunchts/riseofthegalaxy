import { platform } from "os";
import { config } from "rx";
let width;
let height;
let x;
let y;
let player;
let cursors;
let group;
let alien;
let i = 0;
let gameover = false;
let boss;
let tileSprite;
let bullets;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('player', '../images/player.png');
        this.load.image('bg', '../images/bg.jpg');
        this.load.image('bullet', '../images/shoot.png');
        this.load.image('alien', '../images/alien.png');
        this.load.image('boss', '../images/boss.png');

    }

    create() {
        width = this.scene.scene.physics.world.bounds.width;
        height = this.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;

        var Bullet = new Phaser.Class({

            Extends: Phaser.GameObjects.Image,

            initialize:

                function Bullet(scene) {
                    Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');

                    this.speed = Phaser.Math.GetSpeed(400, 1);
                },

            fire: function (x, y) {
                this.setPosition(x, y - 50);

                this.setActive(true);
                this.setVisible(true);
            },

            update: function (time, delta) {
                this.y -= this.speed * delta;

                if (this.y < -50) {
                    this.setActive(false);
                    this.setVisible(false);
                }
            }

        });

        bullets = this.physics.add.group({
            classType: Bullet,
            maxSize: 10,
            runChildUpdate: true
        });

        tileSprite = this.add.tileSprite(x, y, 400, 600, 'bg');

        player = this.physics.add.sprite(200, 500, 'player');
        player.setCollideWorldBounds(true);


        cursors = this.input.keyboard.createCursorKeys();

        alien = this.physics.add.group({
            key: 'alien',
            repeat: 7,
            setXY: { x: 60, y: 40, stepX: 70 }
        });

        boss = this.physics.add.group({
            key: 'boss',
            repeat: 0,
            setXY: { x: 200, y: 100, stepX: 70 }
        });

        this.physics.add.collider(player, alien, hitAlien);
        this.physics.add.collider(bullets, alien, hitBullet);

        alien.children.iterate(function (child) {
            child.setCollideWorldBounds(true);
            child.setBounce(1)
            child.setVelocityX(Phaser.Math.Between(150, 200));
            child.setVelocityY(Phaser.Math.Between(150, 200));

        })

    }

    update() {
        if (cursors.left.isDown) {
            player.setVelocityX(-160);
        }
        else if (cursors.right.isDown) {
            player.setVelocityX(160);
        }
        else {
            player.setVelocityX(0);
        }

        if (gameover == true) {
            this.physics.pause();
        }
        if (cursors.space.isDown) {
            var bullet = bullets.get();
            if (bullet) {
                bullet.fire(player.x, player.y);

            }
        }
        tileSprite.tilePositionY -= 5;

        if (alien.countActive(true) != 0) {
            alien.children.iterate(function (child) {
                if (child.y === 700) {
                    child.enableBody(true, child.x, 0, true, true);
                    alien.setVelocityY(Phaser.Math.Between(150, 200));
                    alien.setVelocityX(Phaser.Math.Between(150, 200));
                    child.setCollideWorldBounds(true);

                }

            });
        }
    }
}

function hitAlien(player, alien) {
    player.disableBody(true, true);
    hitBullet(player, alien)
    gameover = true;

}

function hitBullet(bullet, alient) {
    alient.disableBody(true, true);
    if (alien.countActive(true) == 0) {
        alien.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
            child.setCollideWorldBounds(true);
            alien.setVelocityY(Phaser.Math.Between(150, 200));
            alien.setVelocityX(Phaser.Math.Between(150, 200));

        });
    }
}


export default GameScene;
