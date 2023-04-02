/*

[ ] Escreva um programa onde, você chame uma função mandando
 dois argumentos, 2 números, e a função responde qual número é maior


*/  

const numbers = (number1, number2) => {
    if(number1 > number2){
        console.log("o primeiro numero é maior");
    }else{
        console.log("o segundo numero é maior");

    }
}

numbers(4, 5)