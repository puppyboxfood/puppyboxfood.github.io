const createCurrency = (currency, flag, symbol) => ({
  [currency]: { flag, symbol }
})

export default {
  ...createCurrency("USD", "🇺🇸", "$"),
  ...createCurrency("EUR", "🇪🇺", "€"),
  ...createCurrency("GBP", "🇬🇧", "£"),
  //...createCurrency("CAD", "🇨🇦"),
  //...createCurrency("AUD", "🇦🇺"),
  //...createCurrency("NZD", "🇳🇿"),
  //...createCurrency("JPY", "🇯🇵"),
  //...createCurrency("INR", "🇮🇳"),
  //...createCurrency("", ""),
}
