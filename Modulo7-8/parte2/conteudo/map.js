/*

    MAP
    Cria um novo array, a partit do array percorrido (array original)
    Cria um novo array, com a mesma quantidade de itens do array original
    Aceita 3 parametros
        item do array
        index
        array completo

*/

const numbers = [1, 2, 3, 4]


const students = [
    {name: "Chrystopher", age: 26},
    {name: "Maria", age: 25},
    {name: "Joao", age: 26},
    {name: "Jose", age: 28},
    {name: "Ana", age: 30},
    {name: "Dasdores", age: 27},
    {name: "Julio", age: 26},
    
];

const newArray = numbers.map((number) => {
    const newNumber = number * 2
    return newNumber
})

/*
 Simplificando uma array, lembrando que para tal forma deve conter apenas
 uma propriedade e um retuno simples
 */
const newArray1 = numbers.map(number => number * 4)

const newArrayStudents = students.map((student) => {
    const newStudent = {
        name: student.name + " da Silva",
        age: student.age + 10
    }
    return newStudent
})

console.log(newArray);
console.log(newArrayStudents);
console.log(newArray1);


//----------------- parte 2 map ----------------------------
console.log("________________________________________");
console.log("parte 2");
const double = number => number * 2
const sum = number => number + 10
const minus = number => number - 5
const array2 = numbers.map(double)
const array3 = numbers.map(double).map(sum)
const array4 = numbers.map(double).map(sum).map(minus)
console.log(array2);
console.log(array3);
console.log(array4);