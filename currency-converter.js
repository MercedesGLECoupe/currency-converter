{



    const calculateResult = (amount, currency) => {

        const PLN = 1;
        const EUR = 4.63;
        const CHF = 4.70;
        const GBP = 5.25;
        const USD = 4.22;
        const CNY = 0.61;
        const CZK = 0.20;
        const HUF = 0.01;
        const UAH = 0.11;
        const THB = 0.12;
        const TRY = 0.22;
        const ISK = 0.03;
        const NOK = 0.40;
        const DKK = 0.62;
        const SEK = 0.41;
        const ILS = 1.16;
        const RON = 0.94;
        const MXN = 0.23;
        const ZAR = 0.23;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "CHF":
                return amount / CHF;

            case "GBP":
                return amount / GBP;

            case "USD":
                return amount / USD;

            case "CNY":
                return amount / CNY;

            case "CZK":
                return amount / CZK;

            case "HUF":
                return amount / HUF;

            case "UAH":
                return amount / UAH;

            case "THB":
                return amount / THB;

            case "TRY":
                return amount / TRY;

            case "ISK":
                return amount / ISK;

            case "NOK":
                return amount / NOK;

            case "DKK":
                return amount / DKK;

            case "SEK":
                return amount / SEK;

            case "ILS":
                return amount / ILS;

            case "RON":
                return amount / RON;

            case "MXN":
                return amount / MXN;

            case "ZAR":
                return amount / ZAR;

        }
    }

    const updateResultText = (amount, result, currency) => {
        const returnElement = document.querySelector(".js-result");
        returnElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)
            } ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyOption = document.querySelector(".js-select");
        const currencyConverter = document.querySelector(".js-pln");
        


        const amount = +currencyConverter.value
        const currency = currencyOption.value

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}