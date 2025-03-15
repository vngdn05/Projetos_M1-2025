class TelaExplica extends Phaser.Scene {
    constructor(){
        super ({key : 'TelaExplica'})
    }; 
    preload(){
        this.load.image('bg', 'assets/bg.png')
    }
    create(){
        let iniciar = this.add.image(larguraJogo/2, alturaJogo/2, 'bg').setInteractive()//adiciona o fundo

        this.add.text(40, 100, 'utilize do mouse para levar o pássaro para as moedas', {
            fontSize:'20px',
            fill: "#FF",
            fontStyle:'bold',
            strokeThickness: 1
        });
        this.add.text(40, 200, 'utilize do W,A,S,D para desviar o "dude" das bombas', {
            fontSize:'20px',
            fill: "#FF",
            fontStyle:'bold',
            strokeThickness: 1
        })
        this.add.text(160, 220, 'DICA: evite encostar no alien ;)', {
            fontSize:'20px',
            fill: "#FF",
            fontStyle:'bold',
            strokeThickness: 1
        })
        this.add.text(50, 350, 'CLIQUE NA TELA PARA JOGAR', {
            fontSize:'40px',
            fill: "#FF",
            fontStyle:'bold',
            strokeThickness: 1
        })
        iniciar.on("pointerdown", () => {
            this.scene.start("Jogo");
        })
    }
}
