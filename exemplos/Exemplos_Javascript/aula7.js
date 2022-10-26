/**
 * 1  - Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma coir e um gasto médio de combustível por Kilometro todado. Cire um método que dada a quantidade de quilometros e o preço do combustivel nos dará o valor gasto em reais para realizar este percurso.
 * Resolução
 class Carros{
   marca;
   cor;
   gasto_medio_por_km;
 
   constructor(marca, cor, gasto){
     this.marca = marca;
     this.cor = cor;
     this.gasto_medio_por_km = gasto;
   }
   calcularPrecoTotal(distancia,precoLitro){
     let preco_final =(distancia/this.gasto_medio_por_km)*precoLitro;
     console.log(`\n\nO preço total pelos ${distancia} Km percorridos é de: R$ ${preco_final.toFixed(2)}\n`)
 
   }
 }
 
 const monza = new Carros('Monza','Amarelo',10)
 
 monza.calcularPrecoTotal(120,5.55);
 * 




 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso, altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC Instanceie uma pessoa chamada Joao que tenha 70 kg 1,75 de altura e peça ao Joao dizer o valor do seu IMC. 
 */

class Pessoa{
  nome;
  peso;
  altura;

  constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC(){
    let imc = this.peso/Math.pow(this.altura,2);
    console.log(`Meu IMC é de: ${imc.toFixed(2)}`);
    return imc;
  }
  classificarFaixaIMC(){

    const imc  = this.calcularIMC();

    if(imc<18.5){
      return "\nVocê está abaixo do peso\n"
    }else if(imc >= 18.5 && imc <=25){
      return "\nVocê está na faixa normal de peso\n"
    }else if(imc > 25 && imc <=30){
      return "\nVocê está na faixa de peso acima do indicado\n"
    }else if(imc > 30 && imc <=40){
      return "\nVocê está na faixa de obesidade\n"
    }else{
      return "\nSeu imc é", imc,"e você está na faixa de obesidade grave\n"
    }
  }

  }

const joao = new Pessoa("Joao",80,1.79)
console.log(joao.classificarFaixaIMC());


