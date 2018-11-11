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

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('player','../images/player.png');
        this.load.image('bg','../images/bg.jpg');
        this.load.image('bullet','../images/shoot.png');
        this.load.image('alien','../images/alien.png');
        this.load.image('boss','../images/boss.png');

    }

    create() {
        width = this.scene.scene.physics.world.bounds.width;
        height = this.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;
        this.add.image( x, y,'bg');

        player = this.physics.add.image(200,500,'player');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        

        cursors = this.input.keyboard.createCursorKeys();

        alien = this.physics.add.group({
                key: 'alien',
                repeat: 4,
                setXY: {x: 60 ,y: 40, stepX: 70}
        });
        
        boss = this.physics.add.group({
            key: 'boss',
            repeat: 0,
            setXY: {x: 200 ,y: 100, stepX: 70}
        });

        //this.physics.add.collider(player,alien,hitAlien);
        alien.setVelocityY(Phaser.Math.Between(300,300), Phaser.Math.Between(0, 0));
        
    }

    update() 
    {
        if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
    }
    else
    {
        player.setVelocityX(0);
    }

    if(gameover == true){
        this.physics.pause();
    }

    }

}

// function hitAlien(player,alien)
// {
//     player.setTint(0xEA9999);
    
//     gameover = true;
// }

export default GameScene;
