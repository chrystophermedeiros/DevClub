/*
const button = document.getElementById("convert-button");
const dolar = 5.2;
const select = document.getElementById("select1");
const select2 = document.getElementById("select2");

const convertValues = () => {
    const inputValue = document.getElementById("input-reais").value;
    const realvalue1 = document.getElementById("valor-texto1");
    const realvalue2 = document.getElementById("valor-texto2");
    const result = inputValue / dolar;

    realvalue1.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputValue);

    realvalue2.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(result);
};

const changeCurrency1 = () => {
    const currencyName2 = document.getElementById("currencyName2");
    const img2 = document.getElementById('img2')

    //------------------selec2--------------------

    if (select2.value === "R$ Real Brasileiro") {
        currencyName2.innerHTML = "Real";
        img2.src = "./assets/images/brasil.svg"

    } else if (select2.value === "US$ Dólar americano") {
        currencyName2.innerHTML = "Dolar";
        img2.src = "./assets/images/ua.svg"

    } else if (select2.value === "€ Euro") {
        currencyName2.innerHTML = "Euro";
        img2.src = "./assets/images/euro.svg"
    } else if (select2.value === "₿ Bitcoin") {
        currencyName2.innerHTML = "Bitcoin";
        img2.src = "./assets/images/bitcoins.svg"

    }


}


const changeCurrency = () => {
    const currencyName = document.getElementById("currencyName1");
    const img1 = document.getElementById('img1')


    if (select.value === "R$ Real Brasileiro") {
        currencyName.innerHTML = "Real";
        img1.src = "./assets/images/brasil.svg"

    } else if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dolar";
        img1.src = "./assets/images/ua.svg"

    } else if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro";
        img1.src = "./assets/images/euro.svg"
    } else if (select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        img1.src = "./assets/images/bitcoins.svg"

    }


};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
select2.addEventListener("change", changeCurrency1);

*/
const button = document.getElementById("convert-button");
const dolar = 5.2;
const select = document.getElementById("select1");
const select2 = document.getElementById("select2");
const realvalue1 = document.getElementById("valor-texto1");
const realvalue2 = document.getElementById("valor-texto2");
const currencyName1 = document.getElementById("currencyName1");
const currencyName2 = document.getElementById("currencyName2");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

const convertValues = () => {
  const inputValue = document.getElementById("input-reais").value;
  const result = inputValue / dolar;

  realvalue1.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);

  realvalue2.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(result);
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
};

button.addEventListener("click", convertValues);
select.addEventListener("change", () => changeCurrency(select, currencyName1, img1));
select2.addEventListener("change", () => changeCurrency(select2, currencyName2, img2));
