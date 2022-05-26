import React, { useState } from "react"
import { withCookies } from "react-cookie"
import { BoxProvider, BoxConsumer } from "../contexts/box"
import { CurrencyProvider, CurrencyConsumer } from "../contexts/currency"
import BoxPop from "./box-pop"
import products from "../data/products"
import { convert } from "../utils/currency"
import Bot from "./bot"

const quantity = (box) => {
  return Object.values(box).reduce((sum, val) => (val + sum), 0)
}

const findProduct = (productId) => {
  return products.find(({ id }) => id === productId)
}

const total = (box, currency) => {
  return Object.entries(box).reduce((sum, entity) => (convert(findProduct(parseInt(entity[0])).price, currency.currency) * entity[1]) + sum, 0)
}

const App = ({ children, enableBoxPop }) => {
  const [scrollDisabled, disableScroll] = useState()
  return (
    <div className={`relative ${scrollDisabled ? "h-[100vh] md:overflow-visible md:h-auto" : "" }`}>
      <CurrencyProvider>
        <BoxProvider>
          {children}
          <CurrencyConsumer>
            {({ state: currencyState }) => (
              <BoxConsumer>
                {({ state: boxState }) => (
                  enableBoxPop ? (
                    <BoxPop
                      currency={currencyState}
                      quantity={quantity(boxState ? boxState.box : {})}
                      total={total(boxState ? boxState.box : {}, currencyState)}
                    />
                  ) : null
                )}
              </BoxConsumer>
            )}
          </CurrencyConsumer>
          <BoxConsumer>
            {({ state: boxState }) => (
              <Bot
                onClick={disableScroll}
                bottom={enableBoxPop && quantity(boxState ? boxState.box : {}) > 0 ? "4rem" : 0}
              />
            )}
          </BoxConsumer>
        </BoxProvider>
      </CurrencyProvider>
    </div>
  )
}

export default App
