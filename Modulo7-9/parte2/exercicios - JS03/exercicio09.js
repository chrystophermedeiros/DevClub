/*
[ ] Escreva um programa onde, você cria uma função geradora de desconto.
A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
Os descontos funcionam da seguinte forma:
--Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
--Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
--Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%


--Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
--Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
--Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%

--Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
--Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
--Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%


Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto - 
Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:
Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.


*/


function desconto (nome, valorTotalCompra, primeiraCompra, pagamentoAvista) {
 
    const cupomAleatorio = parseInt(Math.random() * (20 - 10) + 10)
    const arrayCupom = [30, 25, 20, 15, 10, 5, cupomAleatorio]

    //----------------Primeira compra e pagamento AVISTA-------------------------------------

    if (primeiraCompra && pagamentoAvista ) {
        if(valorTotalCompra > 1000){
            console.log(`${nome} sua compra foi de R$ ${valorTotalCompra} AVISTA, sendo assim você obiteve ${arrayCupom[0]}% de desconto, e o valor a ser pago é de: R$${valorTotalCompra - (valorTotalCompra * (arrayCupom[0]/100)) } `);

        }else if (valorTotalCompra < 500 ){
            console.log(`${nome} sua compra foi de R$ ${valorTotalCompra} AVISTA, sendo assim você obiteve ${arrayCupom[1]}% de desconto, e o valor a ser pago é de: R$${valorTotalCompra - (valorTotalCompra * (arrayCupom[1]/100)) } `);

        }else {
            console.log(`${nome} sua compra foi de R$ ${valorTotalCompra} AVISTA, sendo assim você obiteve ${arrayCupom[2]}% de desconto, e o valor a ser pago é de: R$${valorTotalCompra - (valorTotalCompra * (arrayCupom[2]/100)) } `);
        }

    }        
        

    //----------------Primeira compra e pagamento !AVISTA -------------------------------------
    
    if (primeiraCompra  && !pagamentoAvista ) {
        if(valorTotalCompra > 1000){
            console.log(`${nome} sua compra foi de R$ ${valorTotalCompra} não AVISTA, sendo assim você obiteve ${arrayCupom[2]}% de desconto, e o valor a ser pago é de: R$${valorTotalCompra - (valorTotalCompra * (arrayCupom[2]/100)) } `);

        }else if (valorTotalCompra < 500 ){
            console.log(`${nome} sua compra foi de R$ ${valorTotalCompra} não AVISTA, sendo assim você obiteve ${arrayCupom[3]}% de desconto, e o valor a ser pago é de: R$${valorTotalCompra - (valorTotalCompra * (arrayCupom[3]/100)) } `);

        }else {
            console.log(`${nome} sua compra foi de R$ ${valorTotalCompra} não AVISTA, sendo assim você obiteve ${arrayCupom[4]}% de desconto, e o valor a ser pago é de: R$${valorTotalCompra - (valorTotalCompra * (arrayCupom[4]/100)) } `);
        }

    } 


     //----------------!Primeira compra e pagamento AVISTA -------------------------------------
    
     if (!primeiraCompra  && pagamentoAvista ) {
        if(valorTotalCompra > 1000){
            console.log(`${nome} sua compra foi de R$ ${valorTotalCompra} AVISTA, não sendo sua primeira compra, sendo assim você obiteve ${arrayCupom[2]}% de desconto, e o valor a ser pago é de: R$${valorTotalCompra - (valorTotalCompra * (arrayCupom[2]/100)) } `);

        }else if (valorTotalCompra < 500 ){
            console.log(`${nome} sua compra foi de R$ ${valorTotalCompra} AVISTA,não sendo sua primeira compra, sendo assim você obiteve ${arrayCupom[3]}% de desconto, e o valor a ser pago é de: R$${valorTotalCompra - (valorTotalCompra * (arrayCupom[3]/100)) } `);

        }else {
            console.log(`${nome} sua compra foi de R$ ${valorTotalCompra} AVISTA,não sendo sua primeira compra, sendo assim você obiteve ${arrayCupom[4]}% de desconto, e o valor a ser pago é de: R$${valorTotalCompra - (valorTotalCompra * (arrayCupom[4]/100)) } `);
        }

    } 

     //----------------!Primeira compra e pagamento !AVISTA -------------------------------------
    
     if (!primeiraCompra && !pagamentoAvista ) {
        if(valorTotalCompra > 1000){
            console.log(`${nome} sua compra foi de R$ ${valorTotalCompra} não AVISTA, não sendo sua primeira compra, sendo assim você obiteve ${arrayCupom[4]}% de desconto, e o valor a ser pago é de: R$${valorTotalCompra - (valorTotalCompra * (arrayCupom[4]/100)) } `);

        }else if (valorTotalCompra < 500 ){
            console.log(`${nome} sua compra foi de R$ ${valorTotalCompra} não AVISTA,não sendo sua primeira compra, sendo assim você obiteve ${arrayCupom[5]}% de desconto, e o valor a ser pago é de: R$${valorTotalCompra - (valorTotalCompra * (arrayCupom[5]/100)) } `);

        }else {
            console.log(`${nome} sua compra foi de R$ ${valorTotalCompra}  não AVISTA,não sendo sua primeira compra, sendo assim você obiteve um cupom de ${arrayCupom[6]}% na sua proxima compra, e o valor a ser pago é de: R$${valorTotalCompra - (valorTotalCompra * (arrayCupom[6]/100)) } `);
        }

    } 
}



desconto("Chrystopher", 500, false, false)