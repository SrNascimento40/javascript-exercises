class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        //torna obrigado informar esses dados para criar uma nova classe
        this.nome = nome;
        this.idade = idade
    }

    descrever() {
        console.log(`a pessoa ${this.nome} tem ${this.idade} anos`);
    }
}

const wallace = new Pessoa();
wallace.nome = "Wallace Nascimento";
wallace.idade = 22

wallace.descrever()

const romario = new Pessoa('Romário', 47);
//para isso é necessário o constructor
romario.descrever()

const pessoas = [wallace, romario]
console.log(pessoas);
const bebeto = new Pessoa('Bebeto', 61);
//adiciona a lista
pessoas.push(bebeto);
console.log(pessoas);
//tira último elemento da lista (ou o que estiver no parenteses)
pessoas.pop();
console.log(pessoas);

for (let i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i]);
}