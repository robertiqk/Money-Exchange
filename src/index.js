// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let H = 50;
    let Q = 25;
    let D = 10;
    let N = 5;
    let P = 1;
    let MoneyChange = {};
    let errorObj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency == 0) return MoneyChange;
    if (currency > 10000) return errorObj;

    if (Math.floor(currency / H) > 0 ) {
        MoneyChange.H = Math.floor(currency / H);
        currency = currency - Math.floor(currency / H) * H;
    }

    if (Math.floor(currency / Q) > 0 ) {
        MoneyChange.Q = Math.floor(currency / Q);
        currency = currency - Math.floor(currency / Q) * Q;
    }

    if (Math.floor(currency / D) > 0 ) {
        MoneyChange.D = Math.floor(currency / D);
        currency = currency - Math.floor(currency / D) * D;
    }

    if (Math.floor(currency / N) > 0 ) {
        MoneyChange.N = Math.floor(currency / N);
        currency = currency - Math.floor(currency / N) * N;
    }

    if (Math.floor(currency / P) > 0 ) {
        MoneyChange.P = Math.floor(currency / P);
        currency = currency - Math.floor(currency / P) * P;
    }
    return MoneyChange;
}
