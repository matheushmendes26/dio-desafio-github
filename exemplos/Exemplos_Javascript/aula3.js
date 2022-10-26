/*1) Faça um algotmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
Média aritmética simples;
Classificação:
 - menor que 5, reprovado;
 - entre 5 e 7 (incluso), recuperaçaõ;
 - maior que 7, passou no semestre;

 Resulução 1
 const nota1 = 9.5;
 const nota2 = 7;
 const nota3 = 7;
 
 let media   = (nota1+nota2+nota3)/3;
 
 if (media<5){
   console.log("Estudante reprovado com", media.toFixed(1), "pontos !!!")
 }else{
   if(media>= 5 && media <= 7){
     console.log("Estudante de recuperação com", media.toFixed(1), "pontos!!!")
   }else{
     console.log("Estudante aprovado com", media.toFixed(1), "pontos!!!")
   }
 }

2)O IMC -  Índice de Massa corporal é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Elabora um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

IMC
- Abaixo de 18.5: Abaixo do peso;
- Entre 18.5 a 25: Peso normal;
- Entre 25 e 30: Acima do peso;
- Entre 30 e 40: Obeso;
- Acima de 40: Obesidade Grave;


Resolução exercicio 2
const peso_em_kilos = 53;
const altura_em_m = 1.65;

let imc = (peso_em_kilos/(altura_em_m*altura_em_m)).toFixed(2);

if(imc<18.5){
  console.log("\nSeu imc é", imc,"e você está abaixo do peso\n")
}else if(imc >= 18.5 && imc <=25){
  console.log("\nSeu imc é", imc,"e você está na faixa normal de peso\n")
}else if(imc > 25 && imc <=30){
  console.log("\nSeu imc é", imc,"e você está na faixa de peso acima do indicado\n")
}else if(imc > 30 && imc <=40){
  console.log("\nSeu imc é", imc,"e você está na faixa de obesidade\n")
}else{
  console.log("\nSeu imc é", imc,"e você está na faixa de obesidade grave\n")
}

3)Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento

Código condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- A vista Dinheiro ou PIX, 15% de desconto;
-  Em duas vezes, valor normal da etiqueta;
- Acima de duas vezes, preço normal da etiqueta mais jutas de 10%

*/

const tipo_de_pagamento = "A VISTA"
const forma_de_pagamento = "Débito"
const parcelas = 3;

let valor_etiqueta = 100;

if(tipo_de_pagamento === "A VISTA")
{
  if(forma_de_pagamento === "Débito"){  
  valor_etiqueta = (valor_etiqueta*0.9).toFixed(2);
  }else if(forma_de_pagamento === "PIX" || forma_de_pagamento === "Dinheiro"){
    valor_etiqueta = (valor_etiqueta*0.85).toFixed(2);
  }
}else if(tipo_de_pagamento=== "A PRAZO"){

  if(parcelas>2){
    valor_etiqueta = (valor_etiqueta*1.1).toFixed(2);
  }

}else{
  console.log("tipo de pagamento inválido")
}

console.log("\nO valor total a ser pago pela compra é de ", valor_etiqueta,"reais.\n")