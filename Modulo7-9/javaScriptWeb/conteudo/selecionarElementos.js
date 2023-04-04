/*
Selecionamento Elementos:

    getElementById() === Trás apenas um elemento
    getElementClassName() === Trás diversos elementos (HTML Collection)
    getElementTagName === Trás diversos elementos (HTML Collection)

    quereSelector === Trás apenas um elemento ,o primeiro que encontrar (element)
     quereSelectorAll === Trás TODOS os elemento que encontarr (NodList)

    NodeList x HTML Colection

*/






//---------------ByName----------
const element6 = document.getElementsByName("my-input")

//--------Pegando atributos-----------
const element7 = document.querySelector("input")
console.log(element7.attributes.value);





