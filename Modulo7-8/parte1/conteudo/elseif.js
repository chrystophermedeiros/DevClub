// Else IF

/*
    else if = mais se
*/
const name= "Chrystopher"
let temperature = 41

if(temperature >= 36 && temperature <=37.5){
    console.log(`${name} Fique tranquilo,voce está sem febre`);

} else if (temperature >= 37.6 && temperature <= 39.5) {
    console.log(`${name}Voce está com febre, procure uma Unidade de Atendimento`);

} else if (temperature >= 39.6 && temperature < 41) {
    console.log(`${name} voce está com febre alta procure um Hospital imediatamente`);

} else if (temperature >= 41) {
    console.log(`${name} Voce está com Hipertermia, procure um hospital imediatamente`);

} else {
    console.log(`${name} Voce está com Hiportemia, procure uma unidade de atendimento`);
}