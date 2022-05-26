import React, { createContext, useContext, useReducer } from "react"
import { Cookies, useCookies } from "react-cookie"
import products from "../data/products"

const BoxContext = createContext(null)

const getLocalStorage = () => typeof window !== 'undefined' && window.localStorage

const persistStateToCookie = (state) => {
  const localStorage = getLocalStorage()
  if (localStorage) {
    localStorage.setItem("my-custom-box", JSON.stringify(state.box))
  }

  return state
}

const boxReducer = (state, action) => {
  const productId = action.productId
  const box = state.box
  const quantity = box[productId] || 0
  let newState = null

  switch (action.type) {
    case "add": {
      return persistStateToCookie({...state, box: { ...box, [productId]: quantity + 1 }})
    }
    case "remove": {
      return persistStateToCookie({...state, box: { ...box, [productId]: Math.max(0, quantity - 1) }})
    }
  }
}

export const BoxProvider = ({ children }) => {
  const localStorage = getLocalStorage()
  const savedBox = localStorage ? localStorage.getItem("my-custom-box") : null
  const [state, dispatch] = useReducer(boxReducer, { products, box: savedBox ? JSON.parse(savedBox) : {} })
  const value = { state, dispatch }

  return <BoxContext.Provider value={value}>{children}</BoxContext.Provider>
}

export const useBox = () => {
  const context = useContext(BoxContext)
  if (context === undefined) {
    throw new Error('useBox must be used within a BoxProvider')
  }
  return context
}

export const BoxConsumer = ({ children }) => (
  <BoxContext.Consumer>
    {context => {
      if (context === undefined) {
        throw new Error('BoxConsumer must be used within a BoxProvider')
      }
      return children(context)
    }}
  </BoxContext.Consumer>
)
