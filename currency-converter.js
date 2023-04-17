
let currencyOption = document.querySelector(".js-select");
let currencyConverter  = document.querySelector(".js-pln");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");


let PLN = 1;
let EUR = 4.77;
let CHF = 4.81;
let GBP = 5.34;
let USD = 4.48;
let CNY = 0.64;
let CZK = 0.2;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyOption.value; 
    let amount = +currencyConverter.value;
    let result;

    switch (currency) {
        case "EUR":
            result = amount / EUR ;
            break;
        case "CHF":
            result = amount / CHF ;
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
    }   
    

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
});


