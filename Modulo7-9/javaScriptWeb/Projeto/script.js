const button = document.getElementById('convert-button')
const dolar = 5.2
const select1 = document.getElementById('select1')




const convertValues = () => {
    const inputValue = document.getElementById('input-reais').value
    const realvalue1 = document.getElementById('valor-texto1')
    const realvalue2 = document.getElementById('valor-texto2')
    const result = inputValue / dolar


    realvalue1.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputValue)

    realvalue2.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(result)


}

const changeCurrency = () => {
    const currencyName1 = document.getElementById('currency-name1')
    // const img1 = document.getElementById('img1')

    if (select1 === "R$ Real Brasileiro") {
        currencyName1.innerHTML = "Real"
        // img1.src = "./assets/images/brasil.svg"
    } else if (select1 === "US$ Dólar americano") {
        currencyName1.innerHTML = "Dolar"

    } else currencyName1.innerHTML = "Bitcoin"




}



button.addEventListener("click", convertValues)
select1.addEventListener("chance", changeCurrency)