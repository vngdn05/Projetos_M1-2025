//Aqui algumas propriedades do jogo e da tela do jogo são definidas, tais como: altura, largura, física, tipo de física, gravidade, visibilidade das hitboxs e utilização do framework Phaser.
let larguraJogo = 700;
let alturaJogo = 850;

const config = {
    type: Phaser.AUTO,
    width: larguraJogo,
    height: alturaJogo,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: [TelaInicial, TelaExplica, Jogo, GameOver] 
};
const game = new Phaser.Game(config);