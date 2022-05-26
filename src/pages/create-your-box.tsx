import * as React from "react"
import App from "../components/app"
import Hero from "../components/hero"
import NavBar from "../components/nav-bar"
import Product from "../components/product"
import BoxSteps from "../components/box-steps"
import { BoxProvider, BoxConsumer, useBox } from "../contexts/box"
import heroImage from "../images/branding/butcher.jpg"
import { useCurrency } from "../contexts/currency"
import { convert } from "../utils/currency"

const CreateYourBox = () => {
  const { rate, ...currency } = useCurrency()
  const { state: { products, box }, dispatch } = useBox()
  const quantity = Object.values(box).reduce((sum, val) => sum + val, 0)

  return (
    <>
      <NavBar />
      <div className="relative">
        <BoxSteps quantity={quantity} currentStep={1} />
        <h2 className="text-center uppercase text-gray-400 text-lg py-8 font-thin">Our dog meat selection</h2>
        <div className="container mx-auto">
          <div className="grid gap-2 px-2 md:gap-4 md:px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:pb-32 md:pb-24 pb-12">
            {products.map((product) => (
              <Product
                key={product.id}
                {...product}
                price={convert(product.price, currency.currency)}
                currency={currency}
                quantityInBox={box[product.id]}
                addToBox={() => dispatch({type: "add", productId: product.id})}
                removeFromBox={() => dispatch({type: "remove", productId: product.id})}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default () => (
  <App enableBoxPop>
    <CreateYourBox />
  </App>
)
