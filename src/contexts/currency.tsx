import React, { createContext, useContext, useReducer } from "react"
import currencies from "../data/currencies"
import exchangeRates  from "../data/exchange-rates"

const CurrencyContext = createContext(null)

const buildCurrencyObject = (currency) => {
  const { symbol, flag } = currencies[currency]
  const rate = exchangeRates[currency]

  return {
    currency,
    flag,
    symbol,
    rate,
  }
}

const getLocalStorage = () => typeof window !== 'undefined' && window.localStorage

const persistCurrency = (state) => {
  getLocalStorage().setItem("currency", state.currency)

  return state
}

const currencyReducer = (state, action) => {
  switch (action.type) {
    case "select": {
      return persistCurrency({...state, currency: action.currency})
    }
  }
}

export const CurrencyProvider = ({ children }) => {
  const savedCurrency = getLocalStorage().getItem("currency")
  const [state, dispatch] = useReducer(currencyReducer, { currency: savedCurrency || "USD" })
  const value = { state, dispatch }

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export const useCurrency = () => {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }

  const currency = context.state.currency
  const { symbol, flag } = currencies[currency]
  const rate = exchangeRates[currency]

  return buildCurrencyObject(currency)
}

export const CurrencyConsumer = ({ children }) => (
  <CurrencyContext.Consumer>
    {(context) => {
      if (context === undefined) {
        throw new Error("CurrencyConsumer must be used within a CurrencyProvider")
      }
      return children({
        ...context,
        state: buildCurrencyObject(context.state.currency)
      })
    }}
  </CurrencyContext.Consumer>
)
