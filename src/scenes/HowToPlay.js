let width;
let height;
let x;
let y;
let buttonexit;
let checkstate;

class HowToPlay extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'HowToPlay'
        });
    }

    preload(){
        this.load.image('scene2','../images/scene2.png');
        this.load.image('exit','../images/exit.png');

    }

    create(){
        width = this.scene.scene.physics.world.bounds.width;
        height = this.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;
        this.add.image( x, y,'scene2');

        buttonexit = this.add.image(370,25,'exit').setInteractive();
        buttonexit.on('pointerup',exitpopup,this);

    }

    update(){

    }

}

function exitpopup(){
    this.scene.start('Start');
}

export default HowToPlay;