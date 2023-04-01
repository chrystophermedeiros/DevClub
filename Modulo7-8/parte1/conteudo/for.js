// Estrutura For

/*
    For -> enquanto

*/
const students = ["Chrystopher", "Maria", "Pedro", "Bem", carro = {
    name: "Fox"      
    
}
]

for (let i = 0; i < students.length; i++ ) {
    if (typeof students[i] === "object" && students[i].name) {
        console.log(`${students[i].name} está presente na aula`);
    } else {
        console.log(`${students[i]} está presente na aula`);
    }
}

const object = {
    pessoa1: {name:"Chrystopher", age: 17},
    pessoa2: {name:"Pedro", age:18},
    pessoa3: {name:"Maria", age: 17},
    pessoa4: {name:"Pedro", age:18}
}


console.log(object.pessoa1.name);
