import * as React from "react"
import App from "../components/app"
import Hero from "../components/hero"
import heroImage from "../images/branding/dog-steak-salad-bed.jpg"
import medicalResearch from "../images/branding/medical-research.jpg"
import ethicallySourced from "../images/branding/dog-in-bag.jpg"
import sustainable from "../images/branding/dog-sitting-in-woodland.jpg"

const Intro = () => (
  <div className="py-6 md:py-12 lg:py-24 bg-neutral-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-xl md:text-2xl text-gray-700">
        <p className="leading-loose py-3">
          <strong>Dog meat</strong> is a controversial topic. We live in a society where dogs are culturally accepted as friends and not as food.
          At <strong>PuppyBox</strong>, we believe meat is meat, and cultures shouldn't restrict our natural predatory need to feed on nutritious food.
        </p>
        <p className="leading-loose py-3">
          <strong>It is the personal choice of an individual to choose to eat dog meat or not.</strong>
        </p>
      </div>
    </div>
  </div>
)

const HealthBenefits = ({ firstParagraph, secondParagraph }) => (
  <>
    <div style={{ backgroundImage: `url('${medicalResearch}')` }} className="text-2xl font-light leading-loose bg-cover bg-center md:bg-[top_left_-34rem] lg:bg-center h-[16rem] xl:h-[40rem] lg:h-[40rem] md:h-[40rem]">
      <div className="flex items-end flex-col justify-center h-full max-w-6xl mx-auto">
        <h2 className="pr-4 md:pr-12 text-gray-500 uppercase font-bold text-2xl xl:pr-0 sm:text-4xl leading-loose md:mb-16 pl-4">Health benefits</h2>
        <p className="text-right hidden md:block text-gray-300 py-3 pr-12 xl:pr-0 lg:w-[45%] md:w-[50%]">
          {firstParagraph}
        </p>
        <p className="text-right hidden md:block text-gray-200 py-3 pr-12 xl:pr-0 lg:w-[45%] md:w-[50%]">
          <strong>
            {secondParagraph}
          </strong>
        </p>
      </div>
    </div>
    <div style={{ backgroundColor: '#0d1016' }} className="p-6 text-xl font-light leading-loose md:hidden">
      <p className="text-gray-300 py-3">
        {firstParagraph}
      </p>
      <p className="text-gray-200 py-3">
        <strong>
          {secondParagraph}
        </strong>
      </p>
    </div>
  </>
)

const EthicallySourced = () => (
  <div className="bg-[#ede8e2]">
    <div className="flex flex-col md:flex-row-reverse max-w-6xl mx-auto">
      <div style={{ backgroundImage: `url('${ethicallySourced}')` }} className="text-2xl font-light leading-loose bg-cover bg-bottom sm:bg-[top_-10rem_left_0px] md:bg-[top_0rem_left_0px] lg:bg-center h-[32rem] xl:h-[40rem] lg:h-[40rem] md:h-[40rem] sm:h-[40rem] md:flex-1">
      </div>
      <div className="p-6 text-xl font-light leading-loose md:flex-1">
        <h2 className="text-amber-700 uppercase font-bold text-2xl sm:text-4xl leading-loose md:my-16">Ethically sourced</h2>
        <p className="py-3 text-amber-900">
          Dogs are protected by stricter welfare laws, <strong>making dog farms the welfare leaders in animal agriculture.</strong>
        </p>
        <p className="py-3 text-amber-900">
          PuppyBox makes sure <strong>all dogs are either farmed for the sole purpose of harvesting their meat or caught in the wild</strong>. We will never harvest meat from dogs raised as pets.
        </p>
        <p className="py-3 text-amber-900">
          We make sure all our farms treat their dogs with the utmost respect. <strong>All our dogs live happy lives for the first six months before being harvested for their meat.</strong> Slaughterhouses follow the same humane-slaughter practices used for pigs, sheep, and cattle.
        </p>
      </div>
    </div>
  </div>
)

const Sustainable = ({ firstParagraph, secondParagraph }) => (
  <>
    <div style={{ backgroundImage: `url('${sustainable}')` }} className="text-2xl font-light bg-cover sm:bg-[top_0%_left_0rem] md:bg-[top_10%_left_0rem] lg:bg-[top_20%_left_0rem] xl:bg-[top_35%_left_0rem] h-[16rem] xl:h-[50rem] lg:h-[50rem] md:h-[40rem] h-[40rem]">
      <div className="flex items-center flex-col justify-between sm:justify-start h-full max-w-6xl mx-auto">
        <div className="flex items-center flex-col justify-start">
          <h2 className="text-green-700 uppercase font-bold text-2xl sm:text-4xl bg-white md:mb-16 mt-10 sm:mt-20 px-4 py-2">Sustainable</h2>
          <p className="text-center text-green-100 py-3 px-4">
            <span className="bg-green-900">
              {firstParagraph}
            </span>
          </p>
        </div>
        <p className="text-center text-green-50 py-3 px-4">
          <strong className="bg-green-900">
            {secondParagraph}
          </strong>
        </p>
      </div>
    </div>
  </>
)

const EqualTreatments = ({ firstParagraph, secondParagraph }) => (
  <>
    <div style={{ backgroundImage: `url('${sustainable}')` }} className="text-2xl font-light leading-loose bg-cover bg-center bg-top h-[16rem] xl:h-[40rem] lg:h-[40rem] md:h-[40rem]">
      <div className="flex items-end flex-col justify-center h-full max-w-6xl mx-auto">
        <h2 className="pr-4 md:pr-12 text-green-300 uppercase font-bold text-2xl xl:pr-0 sm:text-4xl leading-loose md:mb-16 pl-4">Equality for all animals</h2>
        <p className="text-right hidden md:block text-green-100 py-3 pr-12 xl:pr-0 lg:w-[60%] md:w-[70%]">
          {firstParagraph}
        </p>
        <p className="text-right hidden md:block text-green-50 py-3 pr-12 xl:pr-0 lg:w-[60%] md:w-[70%]">
          <strong>
            {secondParagraph}
          </strong>
        </p>
      </div>
    </div>
    <div className="p-6 text-xl font-light leading-loose md:hidden bg-green-900">
      <p className="text-green-100 py-3">
        {firstParagraph}
      </p>
      <p className="text-green-50 py-3">
        <strong>
          {secondParagraph}
        </strong>
      </p>
    </div>
  </>
)
const save = (
  <EqualTreatments
    firstParagraph="At PuppyBox, we believe all animals deserve equal treatment."
  />
)

const WhyDogMeatPage = () => {
  return (
    <>
      <div className="h-[75vh]">
        <Hero
          image={heroImage}
          header={<span className="text-gray-100 lg:text-gray-900">Why dog meat?</span>}
          secondHeader="A better choice"
        />
      </div>
      <Intro />
      <HealthBenefits
        firstParagraph="Research has shown that eating dog meat is healthier than other red meat sourced from beef, pork, or sheep."
        secondParagraph="PuppyBox wants to bring this healthier nutritious meat to people who wish to live healthier and longer lives."
      />
      <EthicallySourced />
      <Sustainable
        firstParagraph="Dogs are more sustainable to farm than beef. They require less land and produce much less methane."
        secondParagraph="We ought to farm dogs in order to fight climate change."
      />
    </>
  )
}

export default () => (
  <App>
    <WhyDogMeatPage />
  </App>
)
