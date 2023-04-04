///Eventos == quando faço uma ação no HTML

const element10 = document.querySelector("button")
const element11 = document.querySelector("input")

const myFunction = () => {
    element10.style.backgroundColor ="red"
    alert("Vai mudar a cor do background para red")

}

element11.onkeypress = () =>{
    element11.style.color = "red"
}