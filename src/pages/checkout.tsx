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
      <div className="container mx-auto md:p-8">
        <video width="100%" poster="https://watchdominion.org/posters/default.png" controls>
          <source src="https://watchdominion.org/watch-dominion/en" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  )
}

export default () => (
  <App>
    <Checkout />
  </App>
)
