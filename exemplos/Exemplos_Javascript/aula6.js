
//objeto literal
/**
 * 
 const vitor = {
   nome: "Matheus",
   idade: 25,
   descrever: function () {
     console.log(`Meu nome é ${this.nome}`)
   }
 }
 
 //vitor.descrever();
 
 //atribuição dinâmica
 
 const atributo = 'idade';
 console.log(vitor[atributo]);
 */

class Pessoa{
  nome;
  idade;

  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }

  descrever(){
    console.log(`Meu nome é : ${this.nome}`);
  }
}

function compararPessoa(p1,p2){
  if(p1.idade>p2.idade){
    console.log(`${p1.nome} é mais velho que ${p2.nome}`)
  }else if(p2.idade>p1.idade){
    console.log(`${p2.nome} é mais velho que ${p1.nome}`)
  }else{
    console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`)
  }
}

const vitor = new Pessoa('Vitor',11);
const matheus = new Pessoa('Matheus',11);

compararPessoa(vitor,matheus)

