///Eventos == quando faço uma ação no HTML


const element12 = document.querySelector("input")


element12.onkeypress = (event) =>{
    console.log(event.target.value);
}