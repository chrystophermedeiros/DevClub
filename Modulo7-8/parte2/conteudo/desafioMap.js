// Desafio


const list = [
    {name: "Chrystopher", vip: true},
    {name: "Maria", vip: true},
    {name: "Joao", vip: false},
    {name: "Jose", vip: false},
    {name: "Ana", vip: false},
    {name: "Dasdores", vip: true},
    {name: "Julio", vip: true},
    
];


const newList = list.map( client =>{
    const newList = {
        name: client.name , vip: client.vip,
        sector: client.vip ? 'Black' : 'Green'
    }

    return newList

})


console.log(newList);

const students = [
    {name: "Chrystopher", testeGrade: 7},
    {name: "Maria", testeGrade: 8},
    {name: "Joao", testeGrade: 10},
    {name: "Jose", testeGrade: 8},
    {name: "Ana", testeGrade: 7},
    {name: "Dasdores", testeGrade:6.9},
    {name: "Julio", testeGrade: 2},
    
];

const newStudents = students.map( student =>{
    const newStudent = {
        name: student.name, testeGrade: student.testeGrade,
        finalresult: student.testeGrade >=7 || student.testeGrade == 6.9 ? "aprovaed"  : "dispproved"
    }

    return newStudent
})

console.log(newStudents);




