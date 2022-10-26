//Declaração de variáveis

// Operador de atribuição = 
//Operadores aritiméticos
// + - / *
/**
 * 
 let variavel = 10;
 const pi = 3.141592;
 
 console.log(variavel)
 
 variavel = variavel + 10;
 
 console.log(variavel)
 */

//Desafio 1: Faça um programa para calcular o valor gasto de combustível em uma viagem

/**
 * Não deu muito certo, eu tenho que ver alguma forma de inserir números no console.
 * 
 * 
 let litros_utilizados = 0;
 let valor_total = 0;
 
  console.log('Digite o tempo gasto de viagem em horas');
  let tempo_de_viagem = parseFloat(get());
 
  console.log('Digite a quantidade de litros por hora gastos pelo seu veículo');
  let litros_por_hora =  parseFloat(get());
 
 litros_utilizados = tempo_de_viagem * litros_por_hora;
 
 console.log('Voce gastou ",litros_utilizados,"litros/n/n');
 
 console.log('Digite o valor do litro do seu combustível');
 let valor_litro_de_combustivel =  parseFloat(get());
 
 valor_total = litros_utilizados*valor_litro_de_combustivel;
 
 console.log('Seu gasto total foi de ', valor_total,'litros.');
 * 
 */

 const precoCombsutivel = 5.40;
 const kmPorLitros  = 12;
 const distancia = 125;

 let litros = distancia/kmPorLitros;

 let preco_final = litros*precoCombsutivel;

 console.log("\n\n Para a viagem especificada o valor total é de", preco_final, "reais\n\n");


