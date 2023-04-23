
let currencyOption = document.querySelector(".js-select");
let currencyConverter = document.querySelector(".js-pln");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");


let PLN = 1;
let EUR = 4.63;
let CHF = 4.70;
let GBP = 5.25;
let USD = 4.22;
let CNY = 0.61;
let CZK = 0.20;
let HUF = 0.01;
let UAH = 0.11;
let THB = 0.12;
let TRY = 0.22;
let ISK = 0.03;
let NOK = 0.40;
let DKK = 0.62;
let SEK = 0.41;
let ILS = 1.16;
let RON = 0.94;
let MXN = 0.23;
let ZAR = 0.23;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyOption.value;
    let amount = +currencyConverter.value;
    let result;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;
        case "CHF":
            result = amount / CHF;
            break;
        case "GBP":
            result = amount / GBP;
            break;
        case "USD":
            result = amount / USD;
            break
        case "CNY":
            result = amount / CNY;
            break
        case "CZK":
            result = amount / CZK;
            break
        case "HUF":
            result = amount / HUF;
            break
        case "UAH":
            result = amount / UAH;
            break
        case "THB":
            result = amount / THB;
            break
        case "TRY":
            result = amount / TRY;
            break
        case "ISK":
            result = amount / ISK;
            break
        case "NOK":
            result = amount / NOK;
            break
        case "DKK":
            result = amount / DKK;
            break
        case "SEK":
            result = amount / SEK;
            break
        case "ILS":
            result = amount / ILS;
            break
        case "RON":
            result = amount / RON;
            break
        case "MXN":
            result = amount / MXN;
            break
        case "ZAR":
            result = amount / ZAR;
            break
    }


    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
});


