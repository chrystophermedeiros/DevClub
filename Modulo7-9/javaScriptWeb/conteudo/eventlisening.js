/*

Event lisening

*/

///Eventos == quando faço uma ação no HTML


const input = document.querySelector("#event")
const select = document.querySelector("select")
const button = document.querySelector("#nAperte")
const clickButton = () => {alert("o botao foi clicado")

}


input.addEventListener('focus', () => {
    input.style.color = "red"
})

select.addEventListener('change', () => {
    console.log(select.value);
})

button.addEventListener('click', clickButton )