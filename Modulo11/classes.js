/// Classes



// const person = {
//     name: "chrystopher",
//     age: 26,
//     talk: function(){
//         console.log("ola");
//     }
// }


class Person {
    constructor(name, age){
        console.log(`Hello, I'm ${name}`);
       this.name = name
        this.age = age

    }
  

    talk() {
        console.log(`Muito louco né não ${this.name} tua idade ${this.age}`);
    }


}

const person = new Person("chrystopher", 26)
person.talk()

