import  { useState, useEffect } from 'react';

function useCurrencyInfo(currency = null){
    const [rates, setRates] = useState({});
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`) 
        .then((res) => res.json())
        .then((res) => setCurrencies(Object.keys(res)));

        if (currency) {
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setRates(res[currency]));
        }

    }, [currency]);

    return { rates, currencies };
}

export default useCurrencyInfo;