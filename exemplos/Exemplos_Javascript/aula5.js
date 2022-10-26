
/**
 
 console.log(EscrevaNome("Matheus"));
 * 
 */

function EscrevaNome(nome){
  return "Seu nome é: "+ nome;
}

function EhMaiorDeIdade(idade){
  if(idade>=18){
    console.log(EscrevaNome("Matheus"),"É maior de idade");

  }else{
    console.log(EscrevaNome("Matheus"),"Não é maior de idade");
  }
}

//EhMaiorDeIdade(5);


function Calcular_Valor_final(valor_etiqueta){
  let valor_final  = valor_etiqueta *CalculaVariacao(forma_de_pagamento);
  return valor_final.toFixed(2);
}

function CalculaVariacao(forma_de_pagamento){
  let desconto = 1;
  if(forma_de_pagamento === 1){
    desconto = desconto*0.9;
  }else if(forma_de_pagamento === 2){
    desconto = desconto*0.85
  }else if(forma_de_pagamento === 3){
    desconto = desconto;
  }else{
    desconto = desconto*1.1;
  }
  return desconto;
}


const forma_de_pagamento = 4;
const valor_etiqueta = 133;



console.log("valor final é de :",Calcular_Valor_final(valor_etiqueta), "reais");