/*
This

this em ingles significa = este, esta, isto
no javaScript, o this faz referencia:
Node = module.exports
web= window

escopo: 
    Global = quando começamos a escrver nossa aplicação.
    no contexto global, o this faz referencia ao objeto global,
    que é o objeto window no navegador de internet ou ao objeto global no node.js

    Local = por exemplo, dentro de uma função!

    

*/
console.log(this === module.exports);

const name = " chrystopher" //escopo global
const myname = () => {
    const name = "chryatophwer" // escopo local
    this.name
    console.log(name);
}

const person = {
    name: "chrystopher",
    age: 26,
    talk: function(){
        console.log("ola");
    }
    
     
}

console.log("ola")


function greet(message) {
    console.log(message + " " + this.name + "!");
  }
  
  const person2 = {
    name: "João"
  };
  
  greet.call( "Olá", person2); // Saída: "Olá João!"