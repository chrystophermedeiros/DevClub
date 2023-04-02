/*
1. [ ] Faça um programa que compare um número com 10 e imprime na tela 
"o número é maior, o número é menor o número é igual"
*/
let myNumber = 9.9
const compareNumber = 10

if(myNumber === compareNumber){
    console.log(`${myNumber} é igual a ${compareNumber} `);

} else if (myNumber > compareNumber) {
    console.log(`${myNumber} é maior que ${compareNumber} `);
}else{
    console.log(`${myNumber} é menor que ${compareNumber} `);
}

/*
2. [ ] Faça um programa que verifica se uma pessoa é brasileira ou não. 
DEVE SER UM OBJETO
*/
const nacionality = "Brasileiro"
const person = {
    name: "Chrystopher",
    age: 26,
    nationality: "Argentino"
}

if(person.nationality === nacionality){
    console.log(`${person.name} você é ${nacionality}`);
}else{
    console.log(`${person.name} você não é ${nacionality}, e sim estrangeiro`);
}

/*
3 .[ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 
'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, 
e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, 
se não ganhou, mostra outra mensagem.

*/

const aleatorioGanhador = parseInt(Math.random() * 10 + 1  )
const numberAleatorio = parseInt(Math.random() * 10 + 1  )
console.log(aleatorioGanhador, numberAleatorio);

if(aleatorioGanhador === numberAleatorio){
    console.log(`${person.name} voce ganhou o premio`);

}else {
    console.log(`${person.name} voce não ganhou o premio`);
}

/*
4. [ ] Faça um programa que receba 3 números inteiros, e deve imprimir, 
qual é o maior, qual é o menor.

*/

let number1 = 40
let number2 = 20
let number3 = 15

if(number1 > number2 && number1 > number3){
    console.log("o primeiro é maior" );
}else if(number2 > number3) {
    console.log("o segundo é maior" );
}else{
    console.log("o terceiro é maior" );

}

if(number1 < number2 && number1 < number3){
    console.log("o primeiro é menor" );
}else if(number2 < number3) {
    console.log("o segundo é menor" );
}else{
    console.log("o terceiro é menor" );

}




//Outra forma avancada bem melhor
const arrayNumber = [1, 2, 3, 10, 50]
const numeromaior = Math.max(...arrayNumber)
const numeromenor = Math.min(...arrayNumber)

console.log(numeromaior, numeromenor);




/*
5. [ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa 
deve ser maior de idade e brasileira para ser aprovada.
*/

const personOne = 
{ nome: "Chrystopher", 
idade:26, sexo:"Masculino", 
profissão:"Analista de TI",
nacionalidade:"Brasileiro"
 }

if(personOne.idade >= 18 && (personOne.nacionalidade === "Brasileiro" || personOne.nacionalidade === "Brasileira" )){
    console.log(`${personOne.nome} Voce foi aprovado`);
}else {
    console.log(`p${personOne.nome} Voce não foi aprovado`);
}
/*
Faça um programa onde os jurados 
vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve 
conter uma mensagem diferente.
*/
let notaRecebida = 10
switch(notaRecebida){
    case 10:
    console.log(`${personOne.nome} Voce foi o melhor da noite`);
    break

    case 9:
    console.log(`${personOne.nome} Voce foi um dos melhores da noite`);
    break

    case 8:
    console.log(`${personOne.nome} Voce foi otmo`);
    break

    default: 
    console.log(`${personOne.nome} não foi dessa vez`);
    
}

/*
6. [ ] Faça um programa onde leia um numero e diga se ele é par ou impar.

*/

let parOuImpar = 25
if(parOuImpar % 2 === 0){
    console.log(`${parOuImpar} é par`);
}else{
    console.log(`${parOuImpar} é impar`);
}

/*
7. [ ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par,
 - é um número primo e impar, - é par e divisível por 5.

*/

const numberPrimo = 25
if (numberPrimo % 2 === 0){

    if(numberPrimo % 5 === 0) console.log("O número é par e divisivel  por 5");
    else console.log("O número é par e NÂO é divisivel por 5");
} else{

    for (let ii = 2; ii < numberPrimo; ii++)
        if (numberPrimo % ii === 0) {
            console.log("Ele é ímpar, mas não é primo");
            break
        }else  if (ii === numberPrimo -1) console.log("Ele é um número primo"); 

}
    



/*
8. [ ] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - 
Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => 
TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => 
Há números pares e ímpares.
*/

if(number1 % 2 === 0 && number2 % 2 === 0 && number3 %2 ===0) {
    console.log("Todos são pares");
} else if (number1 % 2 !== 0 && number2 % 2 !== 0 && number3 %2 ===0){
    console.log("Todos são impares");
} else {
    console.log("Contem numeros impares e pares");

}
    
