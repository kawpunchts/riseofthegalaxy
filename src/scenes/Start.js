let width;
let height;
let x;
let y;
let buttonstart;
let buttonhowto;
let checkstate;

class Start extends Phaser.Scene{
    constructor(test){
        super({
            key: 'Start'
        });
    }

    preload(){
        this.load.image('scene','../images/scene.png');
        this.load.image('start','../images/start.png');
        this.load.image('howtoplay','../images/HowToPlay.png');

    }

    create(){
        width = this.scene.scene.physics.world.bounds.width;
        height = this.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;
        this.add.image( x, y,'scene');

        buttonstart = this.add.image(200,400,'start').setInteractive();
        buttonstart.on('pointerup',startpopup,this);
        buttonhowto = this.add.image(350,575,'howtoplay').setInteractive();
        buttonhowto.on('pointerup',howtoplaypopup,this);


    }

    update(){

    }

}

function startpopup(){
    this.scene.start('GameScene');
}
function howtoplaypopup(){
    this.scene.start('HowToPlay');
}

export default Start;