import exchangeRates from "../data/exchange-rates"

export const convert = (price, currency) => {
  const rate = exchangeRates[currency]

  return Math.round(price * rate * 100) / 100
}
