// --------------------For Of---------------------------



let myName = "Chrystopher"
let allNames = ['Maria','jose', 'Carlos']

for(let letter of myName){
    console.log(letter);
}

for(let letter of allNames){
    console.log(letter);
}

// --------------------For In---------------------------

const student ={
    name: "Chrystopher",
    age: 26,
    genre: "male"
}

for(let property in student){ // dessa forma mostr todas as proriedades do objeto
    console.log(property);
}


for(let property in student){ // dessa forma mostra todas as valores das propriedades
    console.log(property + ":" + student[property]);
    console.log(`${property} : ${student[property]}`); //outra forma
}