import * as React from "react"
import App from "../components/app"
import Hero from "../components/hero"
import heroImage from "../images/branding/dog-in-bag.jpg"

const Sourcing = () => {
  return (
    <>
      <div className="h-[75vh]">
        <Hero
          image={heroImage}
          header="Sourcing"
          secondHeader="A better choice"
        />
      </div>
    </>
  )
}

export default () => (
  <App>
    <Sourcing />
  </App>
)
