/* [ ] Faça um programa onde toda vez que ele rodar,
 coloca na tela um número aleatório entre 1 e 100.
*/
let min = 1
let max = 101
let aleatorio = Math.random()

console.log(Math.floor(aleatorio * (max - min) + min));
