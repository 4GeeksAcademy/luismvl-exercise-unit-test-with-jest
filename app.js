let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollarAmount) {
    return (dollarAmount/1.2) * 127.9
}

function fromEuroToDollar(euroAmount) {
    return euroAmount * 1.2
}

function fromYenToPound(yenAmount) {
    return (yenAmount/127.9) * 0.8
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound }