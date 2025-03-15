# Instruções
- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 8 questões objetivas assinalando a alternativa correta e **justificando sua resposta.**
- Resolva as 2 questões dissertativas escrevendo no próprio arquivo .md
- Lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com o uso de ChatGPT (e similares), pois entregar algo só para ganhar nota não fará você aprender. Não seja dependente da máquina!
- Ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas

 **OBS: "R)" são as respostas**

**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
a) A saída será undefined seguido de erro 

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log


**R) Alternativa correta é a (a), pois o codigo foi digitado certo, mas ambas variáveis foram escritas depois dos console.logs**


**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0)

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)


**R) Alternativa correta é a (b), porque para que a soma de um número com o 0 saia o próprio número é necessário colocar que a função só de erro se ambos os números forem 0.**

______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

b) O código imprime 200.

c) O código imprime 50.

d) O código gera um erro.

**R) Alternativa certa é a (a), pois o console log vai chamar o eletronico na funcção "calcular preço" e o switch vai escolher o eletronico mudando a variavel para 1000. Sendo assim, o console log vai retonar 1000** 

______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

d) 24

**R) Alternativa certa é a (d), porque o console log vai buscar a variavel "resultado" sendo ela a resultante dos comnados feitos no array "numeros" dando 24, os comando foram: multiplicar cada numero na lista por 2, em seguida filtrar os numeros que deram maior que 5, e por final somar todos os numeros multiplicados**

______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

c) ["banana", "abacaxi", "manga", "laranja"]

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

**R) Alternativa certa é a (c), porque o console.log chama o resultado do array "lista" que foi modificado pelo comando "splice" que troca a fruta maçã pelo abacaxi e a uva pela manga por escolher o numero 1 (segundo lugar no array) e o 2 (terceiro lugar no array)**
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

**R) Alternativa certa é a (b), porque as duas afirmações estão corretas e a II não justifica a I, porque a II so fala com qual codigo cria-se uma herança entre duas classes e não justifica a primeira**

______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
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
let pes = new Pessoa('joao',20)
```
I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

a) I e II são verdadeiras.

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

**R) Alternativa certa á a (a), porque o super tem a função de trazer coisas de outra classe**

______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

b) A asserção é verdadeira e a razão é falsa.

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

**R) Alternativa certa é a (b), porque o método de sobrecarga não é utilizável para JavaScript porque se você usar a mesma variável para varias operações ele vai computar a ultima alteração**


______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {
  //falta a variavel soma
    for (i = 0; i < numeros.size; i++)// size está errado o comando certo é length e falta criar a variavel i
    {
        soma = 2*numeros[i]//sem o "+" na igualdade a variavel "soma" não vai adicionar cada numero multiplicado
    }
    return soma
}
console.log(somaArray([1, 2, 3, 4]));

//Código corrijido
function somaArray(numeros) {
    let somamult = 0 //adicinando a variável e dando o valor 0 para somar depois
    for (let i = 0; i < numeros.length; i++) //adicionei a variavel I e troquei size por length 
    {
        somamult += 2*numeros[i] //coloquei o "+" para somar a cada vez que o for passar pela varivel
    }
    return somamult
}
console.log(somaArray([1, 2, 3, 4]));
```
______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

``````javascript
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
``````