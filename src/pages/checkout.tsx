import * as React from "react"
import App from "../components/app"
import NavBar from "../components/nav-bar"
import BoxSteps from "../components/box-steps"
import { useCurrency } from "../contexts/currency"
import { useBox } from "../contexts/box"

const Checkout = () => {
  const { rate, ...currency } = useCurrency()
  const { state: { products, box }, dispatch } = useBox()
  const quantity = Object.values(box).reduce((sum, val) => sum + val, 0)

  return (
    <>
      <NavBar />
      <div className="relative">
        <BoxSteps currentStep={2} />
      </div>
    </>
  )
}

export default () => (
  <App>
    <Checkout />
  </App>
)
