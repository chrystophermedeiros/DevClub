const button = document.getElementById("convert-button");
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const realvalue1 = document.getElementById("valor-texto1");
const realvalue2 = document.getElementById("valor-texto2");
const currencyName1 = document.getElementById("currencyName1");
const currencyName2 = document.getElementById("currencyName2");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const opt = document.getElementsByTagName("option");



const convertValues = async () => {
    const inputValue = document.getElementById("input-reais").value;
    
    
  
    //async await
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
   

    if (select1.value === "R$ Real Brasileiro" && select2.value === "US$ Dólar americano") {

        realvalue1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValue);

        realvalue2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue / dolar);

    } else if (select1.value === "R$ Real Brasileiro" && select2.value === "€ Euro") {

        realvalue1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValue);

        realvalue2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue / euro);

    } else if (select1.value === "R$ Real Brasileiro" && select2.value === "₿ Bitcoin") {

        realvalue1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValue);
        realvalue2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputValue / bitcoin);

    }else {    
        
        
    }
    if (inputValue === "") {
        alert("Por gentileza, Digite um valor")
    }


 


};

const changeCurrency = (select, currencyName, img) => {
    
        
    
    if (select.value === "R$ Real Brasileiro") {
        currencyName.innerHTML = "Real";
        img.src = "./assets/images/brasil.svg";
    } else if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dolar";
        img.src = "./assets/images/ua.svg";
    } else if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro";
        img.src = "./assets/images/euro.svg";
    } else if (select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        img.src = "./assets/images/bitcoins.svg";
    }

   

    convertValues()

};

button.addEventListener("click",convertValues());
select1.addEventListener("change", () => changeCurrency(select1, currencyName1, img1));
select2.addEventListener("change", () => changeCurrency(select2, currencyName2, img2));