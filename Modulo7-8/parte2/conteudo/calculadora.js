/*

    Functions
    -calculadora
    +
    -
    *   
    /

*/

const calculate = (number1, number2, operation) => {
   
    let result
    switch (operation) {
        case "+":
            result = number1 + number2
            break

        case "-":
            result = number1 - number2
            break

        case "*":
            result = number1 * number2
            break

        case "/":
            break
            result = number1 / number2

        default:
            result = number1 + number2
            break
    }
    return result
}

console.log(calculate(2,3,"*"));