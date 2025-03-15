var hitBomb;
var bomb;
var gameOver = false;
var moviment

// Criando uma classe para a cena jogável
class Jogo extends Phaser.Scene {
    constructor() {
        super({ key: 'Jogo' });
    }

    preload() {
        // Carregando as imagens para o jogo
        this.load.image('bg', 'assets/bg.png');
        this.load.spritesheet('bird', 'assets/bird-purple.png', { frameWidth: 75, frameHeight: 75 });
        this.load.image('plat', 'assets/tijolos.png');
        this.load.image('alien', 'assets/alienigena.png');
        this.load.image('fogo', 'assets/turbo.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('moeda', 'assets/moeda.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    };

    create() {
        this.chao = this.physics.add.staticImage(larguraJogo/2, alturaJogo).setSize(700,180).setScale(0.1)
        this.add.image(larguraJogo / 2, alturaJogo / 2, 'bg'); // Adicionando a imagem de fundo
        this.fogo = this.add.sprite(0, 0, 'fogo'); // Adicionando o boost do alien
        this.alien = this.physics.add.image(larguraJogo / 10, alturaJogo / 10, 'alien'); // Adicionando o alien
        this.alien.body.allowGravity = false;

        // Configurando o pássaro
        this.bird = this.physics.add.sprite(350, 600, 'bird'); // Adicionando o pássaro
        this.bird.setCollideWorldBounds(true); // Fazendo com que o pássaro colida com a tela do jogo
        this.bird.body.allowGravity = false; // Adicionando gravidade ao pássaro
        this.bird.setSize(75, 75); // Ajustando a área de colisão do pássaro

        // Animando o pássaro
        this.anims.create({
            key: 'voar',
            frames: this.anims.generateFrameNumbers('bird', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
        this.bird.anims.play('voar', true);

        // Adicionando as plataformas
        this.plat1 = this.physics.add.staticImage(60, 300, 'plat'); // Plataforma 1
        this.plat2 = this.physics.add.staticImage(350, 450, 'plat'); // Plataforma 2
        this.plat3 = this.physics.add.staticImage(640, 600, 'plat'); // Plataforma 3
        this.plats = [this.plat1, this.plat2, this.plat3];

        // Colocando a moeda em jogo
        let moeda = this.physics.add.sprite(larguraJogo / 2, 0, 'moeda');
        moeda.setCollideWorldBounds(true);
        moeda.setBounce(0.7);
        this.physics.add.collider(moeda, this.plats);

        // Criando o texto de pontuação
        this.pontuacao = 0;
        this.placar = this.add.text(50, 50, 'Moedas: ' + this.pontuacao, { fontSize: '45px', fill: '#495613' });

        // Sistema de pontuação
        this.physics.add.overlap(this.bird, moeda, () => {
            moeda.setVisible(false); // A moeda fica "invisível"

            this.posicaoMoeda_X = Phaser.Math.RND.between(50, 650); // Sorteando a posição X
            moeda.setPosition(this.posicaoMoeda_X, 100); // Ajustando a posição da moeda
            this.pontuacao += 1; // Incrementando a pontuação
            this.placar.setText('Moedas: ' + this.pontuacao); // Atualizando o placar
            
            moeda.setVisible(true); // Mostrando a "nova moeda"
        });

        // Adicionando e dando física às bombas
        this.bombs = this.physics.add.group();
        this.physics.add.collider(this.bombs, this.plats);

        function bomba() {
            var bomb = this.bombs.create(this.alien.x, this.alien.y, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            this.physics.add.collider(bomb, this.chao)
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
        
            // Usando setTimeout novamente com arrow function
            setTimeout(() => bomba.call(this), 7000);
        }
        
        // Chama a função bomba após 1 segundo
        setTimeout(() => bomba.call(this), 1000);

       // Configura as teclas W, A, S, D
        this.teclas = {
            W: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            A: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            S: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            D: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };

        //Animando, criando e configurando o jogador 
        this.dude = this.physics.add.sprite(100, 450, 'dude');
        this.dude.setBounce(0.2);
        this.dude.setCollideWorldBounds(true);
        for(let i = 0; i<this.plats.length; i++){
            this.physics.add.collider(this.dude, this.plats[i]);
        }
        this.physics.add.collider(this.dude, this.chao);

        this.anims.create({key: 'A', frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }), frameRate: 10, repeat: -1});
        this.anims.create({key: 'frente', frames: [ { key: 'dude', frame: 4 } ], frameRate: 20});    
        this.anims.create({key: 'D', frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }), frameRate: 10, repeat: -1});
        
        //Adicinando o game over + a mudança para a próxima cena 
        let proximacena = function(){this.scene.start('GameOver')};
        this.physics.add.overlap(this.dude, this.bombs, () => {
            
            this.physics.pause();
            this.dude.setTint(0xff0000)
            this.dude.anims.play('frente');
            console.log('gameover')
            setTimeout(() => proximacena.call(this), 5000)
            gameOver = true
        })

        this.physics.add.overlap(this.dude, this.alien, () => {
            
            this.physics.pause();
            this.dude.setTint(0xff0000)
            this.dude.anims.play('frente');
            console.log('gameover')
            setTimeout(() => proximacena.call(this), 5000)
            gameOver = true
        })

    };

    update() {
        // Movendo o pássaro de acordo com a posição do mouse
        this.bird.x = this.input.x;
        this.bird.y = this.input.y;

        // Verificando se o eixo X está aumentando ou diminuindo
        if (this.bird.x > this.anteriorx) {
            // Eixo X aumentando -> imagem normal
            this.bird.setFlipX(false);
        } else if (this.bird.x < this.anteriorx) {
            // Eixo X diminuindo -> imagem invertida
            this.bird.setFlipX(true);
        }

        // Atualiza a posição anterior do eixo X
        this.anteriorx = this.bird.x;

        // Deixando o boost do alien ficar embaixo dele
        this.fogo.setPosition(this.alien.x, this.alien.y + this.alien.height / 2);

        // Movimentando o alien
        if(gameOver == false){
            if (this.alien.x === 70) { // Quando o alien estiver em 70x
                this.alien.ida = true;
            };
            if (this.alien.x <= 630 && this.alien.ida === true) { // Movendo o alien até 630x
                    this.alien.x += 3.5;
            };
            if (this.alien.x === 630) { // Quando o alien chegar em 630x
                this.alien.ida = false;
            };
            if (this.alien.x >= 70 && this.alien.ida === false) { // Movendo o alien de volta até 70x
                this.alien.x -= 3.5;
            };
        }

        // Colocando as teclas para fazer o dude andar 
          // Movimentação com W, A, S, D
        if(gameOver){
            return;
        } else if (this.teclas.W.isDown) {
            this.dude.setVelocityY(-200); // Move para cima
        } else if (this.teclas.S.isDown) {
            this.dude.setVelocityY(200); // Move para baixo
        }else if (this.teclas.A.isDown) {
            this.dude.setVelocityX(-200); // Move para a esquerda
            this.dude.anims.play('A', true);
        } else if (this.teclas.D.isDown) {
            this.dude.setVelocityX(200); // Move para a direita
            this.dude.anims.play('D', true);
        } else{
            this.dude.setVelocityX(0);
            this.dude.anims.play('frente');
        }
    };

}