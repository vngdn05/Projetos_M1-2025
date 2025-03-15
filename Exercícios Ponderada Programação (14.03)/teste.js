class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
      super(nome, idade);
      this.salario = salario;
    }
  
    apresentar() {
      super.apresentar();
      console.log(`Meu salário é R$ ${this.salario}.`);
    }
  }
  let pes = new Funcionario ('joao','20','2000')
  console.log(pes)
  //nao entendo

function somaArray(numeros) {
    let somamult = 0 //adicinando a variável e dando o valor 0 para somar depois
    for (let i = 0; i < numeros.length; i++) //adicionei a variavel I e troquei size por length 
    {
        somamult += 2*numeros[i] //coloquei o "+" para somar a cada vez que o for passar pela varivel
    }
    return somamult
}
console.log(somaArray([1, 2, 3, 4]));

class Produto{
  constructor(nome, preco){
    this.nome = nome
    this.preco = preco
  }
  
  calcularDesconto(){
    console.log(`${this.nome} custa ${this.preco} com desconto de 10%: ${this.preco*0.9}`)
  }
}

class Livro extends Produto {
  constructor(nome,preco,livro){
    super(nome,preco)
    this.livro = livro
  }
  calcularDesconto(){
    console.log(`${this.nome} ${this.livro} custa ${this.preco} por ser um livro o desconto é de 20%: ${this.preco*0.8}`)
  }
}
let descontoR = new Produto ('Ruffles', 12)
descontoR.calcularDesconto()
let descontoL = new Livro ('Livro', 70,'Hunger Games' )
descontoL.calcularDesconto()
