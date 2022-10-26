//pequeno trecho de código que podemos incovar quando for conveniente para o algoritmo

/**
 
 function sayMyName(name){
   console.log("My name is",name);
 }
 
 //sayMyName("Matheus");
 //sayMyName("Matheus");
 
 function potencia(n){
   return n*n;
 }
 
 const raio = 2.3;
 
 let area = Math.PI*potencia(raio);
 
 //console.log(area.toFixed(2));
 */

function calculaIMC(peso, altura){
  return peso/Math.pow(altura,2)
}

function classificarFaixaIMC(imc){

  if(imc<18.5){
    return "\nSeu imc é", imc,"e você está abaixo do peso\n"
  }else if(imc >= 18.5 && imc <=25){
    return "\nSeu imc é", imc,"e você está na faixa normal de peso\n"
  }else if(imc > 25 && imc <=30){
    return "\nSeu imc é", imc,"e você está na faixa de peso acima do indicado\n"
  }else if(imc > 30 && imc <=40){
    return "\nSeu imc é", imc,"e você está na faixa de obesidade\n"
  }else{
    return "\nSeu imc é", imc,"e você está na faixa de obesidade grave\n"
  }
}

//função auto incovada. Por não ter nome é chamada de função não nomeada.

//Sempre será nosso código principal  = main

(function (){
  const peso = 150;
  const altura = 1.90;
  
  let imc = calculaIMC(peso,altura);
  console.log(classificarFaixaIMC(imc));
  return 0;
})();



