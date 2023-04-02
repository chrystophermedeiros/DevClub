// Operadores ternario ou condicional 

/*
? -> se
: -> se não

*/
const rain = false
const umbrela = rain ? "levar guad-chuva" : "deixar guarda-chuva"

console.log(umbrela);
const balance = true
const isNotBlocked = true
const accountExist = false
const trasferOk = balance && isNotBlocked && accountExist ? 
"Tranfererencia realizada com sucesso" : "Transferencia Negada, tente novamente"

console.log(trasferOk);