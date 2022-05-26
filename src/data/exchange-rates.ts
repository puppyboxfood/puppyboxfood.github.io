const createExchangeRate = (currency, rate) => ({
  [currency]: rate
})

export default {
  ...createExchangeRate("USD", 1),
  ...createExchangeRate("EUR", 0.95216),
  ...createExchangeRate("GBP", 0.79952),
  ...createExchangeRate("CAD", 1.2863),
  ...createExchangeRate("AUD", 1.4056),
  ...createExchangeRate("NZD", 1.5549),
  ...createExchangeRate("INR", 76.534),
  ...createExchangeRate("JPY", 130.15),
}
