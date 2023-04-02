/*

    Reduce
    Retorna um valor (pode ser um novo array, um objeto, string, number, etc...)
    Aceita 4 parametros
        acumulador
        valor atual
        index
        array completo

*/

const numbers = [1, 2, 3, 4, 10, 5];

const sum = numbers.reduce((acc, current) => acc + current, 0)

console.log(sum);



