/*

forEach-

*/

const students = [
    {name: "Chrystopher", age: 26},
    {name: "Maria", age: 25},
    {name: "Joao", age: 26},
    {name: "Jose", age: 28},
    {name: "Ana", age: 30},
    {name: "Dasdores", age: 27},
    {name: "Julio", age: 26},
    
];

// students.forEach( (student, index, aaray) =>{
//     console.log(aaray);
// } )  //aceita até 3 argumentos


let allStudentsAge = 0
students.forEach((student, index)=>{
    allStudentsAge = allStudentsAge + student.age
    console.log(`O aluno chamse-se ${student.name}, tem ${student.age} anos e está na posição ${index} do array`);

})

const averageAge = allStudentsAge / students.length

console.log(`A média de idade dos alunos é ${averageAge.toFixed()}`);