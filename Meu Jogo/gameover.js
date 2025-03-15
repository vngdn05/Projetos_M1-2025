class GameOver extends Phaser.Scene {
    constructor(){
        super ({key: 'GameOver'})
    }
    preload(){
        this.load.image('bg','assets/bg.png')
        this.load.spritesheet('morte', 'assets/gameover/morreu.png',{frameWidth: 100, frameHeight:70});
    }
    create(){
        this.add.image(larguraJogo/2, alturaJogo/2, 'bg')

        this.morte = this.add.sprite(larguraJogo/2, 500, 'morte').setScale(2)
        this.anims.create({
            key: 'morreu',
            frames: this.anims.generateFrameNumbers('morte', { start: 0, end: 5}),
            frameRate: 4,
            repeat: -1
        });
        this.morte.anims.play('morreu', true);

        this.add.text(200, 200, 'Game Over', {
            fontSize:'50px',
            fill: "#FF",
            fontStyle:'bold',
            strokeThickness: 1
        })

    }
}