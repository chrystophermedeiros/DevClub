/*

    FILTER
    Cria um novo array, a partit do array percorrido (array original)
    Cria um novo array, APENAS com os elementos filtrados
    Aceita 3 parametros
        item do array
        index
        array completo

*/

const list = [
    {name: "Chrystopher", vip: true},
    {name: "Maria", vip: true},
    {name: "Joao", vip: false},
    {name: "Jose", vip: false},
    {name: "Ana", vip: false},
    {name: "Dasdores", vip: true},
    {name: "Julio", vip: true},
    
];


const justVips = list.filter( client =>{
    return client.vip
})

console.log(justVips);


const students = [
    {name: "Chrystopher", testeGrade: 7},
    {name: "Maria", testeGrade: 8},
    {name: "Joao", testeGrade: 10},
    {name: "Jose", testeGrade: 8},
    {name: "Ana", testeGrade: 7},
    {name: "Dasdores", testeGrade:6.9},
    {name: "Julio", testeGrade: 2},
    
];

const result = students.filter( student => student.testeGrade >= 8) 

console.log(result);