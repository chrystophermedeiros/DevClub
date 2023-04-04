/*
Selecionamento Elementos:
    quereSelectorAll === Trás TODOS os elemento que encontarr (NodList)
    NodeList 

*/


//----------------Melhor de usar para array
const element5 = document.querySelectorAll("p")
console.log(element5);

element5.forEach(element => {
    console.log(element);
});
