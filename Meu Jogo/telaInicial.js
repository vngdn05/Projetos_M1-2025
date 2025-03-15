class TelaInicial extends Phaser.Scene {
    constructor(){
        super ({key : 'TelaInicial'})
    }; 

    preload(){
        // Loading todas as imagens e spritesheets 
        this.load.image('bg','assets/bg.png');
        this.load.image('jogar', 'assets/tinicial/botaojogar.png');
        this.load.spritesheet('cavalo', 'assets/tinicial/muybridge.png', {frameWidth: 148, frameHeight:110});
        this.load.spritesheet('mega', 'assets/tinicial/megamen2.png', {frameWidth: 68, frameHeigh:65});
        this.load.spritesheet('pikachu', 'assets/tinicial/pikachu.png', {frameWidth: 154, frameHeight:155});
    };
    create(){
        this.add.image(larguraJogo/2, alturaJogo/2, 'bg');

        //Adicionando e animando o pikachu
        this.pika = this.add.sprite(350, 700, 'pikachu').setScale(0.6);
        this.anims.create({
            key: 'dançar',
            frames: this.anims.generateFrameNumbers('pikachu', { start: 0, end: 5}),
            frameRate: 5,
            repeat: -1
        });
        this.pika.anims.play('dançar', true);

        //Adicionando e animando o megamen
        this.mega = this.add.sprite(150, 600, 'mega').setScale(1.5);
        this.anims.create({
            key: 'pular',
            frames: this.anims.generateFrameNumbers('mega', { start: 0, end: 10}),
            frameRate:5,
            repeat: -1
        });
        this.mega.anims.play('pular', true);
        
        //Adicionando e animando o muybridge
        this.cavalo = this.add.sprite(600,600, 'cavalo')
        this.anims.create({
            key: 'cavalgar',
            frames: this.anims.generateFrameNumbers('cavalo', {start:0,end:20}),
            frameRate:5,
            repeat:-1
        });
        this.cavalo.anims.play('cavalgar', true);

        //Adicionando o texto que fala e apresenta o nome do jogo
        this.add.text(120, 300, 'Jogo que junta tudo que tivemos', {
            fontSize:'25px',
            fill: "#FF",
            fontStyle:'bold',
            strokeThickness: 1
        })
        
        this.add.text(190, 350, 'nas ultimas semanas:', {
            fontSize:'25px',
            fill: "#FF",
            fontStyle:'bold',
            strokeThickness: 1
        })

        
        this.add.text(170, 380, 'Jogo METAMORFO', {
            fontSize:'40px',
            fill: "#FF",
            fontStyle:'bold',
            strokeThickness: 1
        })
        //Adicionando o botão "Jogar" e configurando ele para levar para a tela do jogo
        this.botao = this.add.image(larguraJogo/2, alturaJogo/4, 'jogar').setScale(0.5).setInteractive();   
        this.botao.on("pointerdown", () => {
            this.scene.start("TelaExplica");
        })
    }
}