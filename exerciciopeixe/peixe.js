var config = {
    type : Phaser.AUTO,
    width: 880,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

var peix
var conch
var crust

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('peixe', 'peixes/baiacu_lado.png');
    this.load.image('concha', 'peixes/concha.png');
    this.load.image('crustaceo', 'peixes/crustaceo.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png')

        }

function create () {
    this.add.image(440, 300, 'mar');
    peix = this.add.image(400, 300, 'peixe');
    conch = this.add.image(200, 150, 'concha');
    crust = this.add.image(600, 450, 'crustaceo');
    this.add.image(150, 500, 'logo').setScale(0.5)

    peix.setFlip(true,false);


}

function update() {
    peix.x = this.input.x;
    peix.y = this.input.y;
}