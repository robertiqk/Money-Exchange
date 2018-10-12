module.exports = function makeExchange(currency) {
    const currencies = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    }

    const MoneyChange = {};
    
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    let currentCurrency = currency;

    for (let key in currencies) {
        if(currentCurrency >= currencies[key]) {
            const coins = Math.floor(currentCurrency / currencies[key]);
            MoneyChange[key] = coins;
            currentCurrency -= currencies[key] * coins;
        }
    }
    
    return MoneyChange;
}
