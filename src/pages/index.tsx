import React, { useState, useRef, useCallback } from "react"
import App from "../components/app"
import Hero from "../components/hero"
import SlicedSection from "../components/sliced-section"
import Product from "../components/product"
import { useCurrency } from "../contexts/currency"
import { useParallax, ParallaxProvider } from "react-scroll-parallax"
import heroImage from "../images/branding/dog-in-puppybox-kitchen.png"
import pigImage from "../images/home/pig.jpg"
import headshot from "../images/home/dog/headshot.jpg"
import meatStudio from "../images/home/meat-studio.jpg"
import dog from "../images/home/dog.png"
import tree from "../images/home/tree/tree.svg"
import sun from "../images/home/tree/sun.svg"
import leaf from "../images/home/tree/leaf.svg"
import cloud from "../images/home/tree/cloud.svg"
import bush from "../images/home/tree/bush.svg"
import dogFg from "../images/home/dog/fg.png"
import dogBg from "../images/home/dog/bg.png"
import meat from "../images/home/meat.png"
import grave from "../images/home/grave.png"
import box from "../images/home/box.png"
import tick from "../images/home/tick.png"
import home from "../images/home/home.png"
import arm from "../images/home/arm.png"
import pet from "../images/home/pet.png"
import collar from "../images/home/collar.png"
import earTag from "../images/home/ear-tag.png"
import notDogBadge from "../images/home/not-dog-badge.png"
import health from "../images/home/health.png"

const Leaf = ({ className, startingPoint, targetElement }) => {
  let originRotation = Math.random() * -100

  const parallax = useParallax({
    targetElement,
    translateY: [startingPoint*15, 0, "easeIn"],
    rotate: [originRotation, originRotation - Math.random() * -100, "easeIn"],
  })

  return (
    <div
      ref={parallax.ref}
      className={className}
      style={{WebkitTransform: "translate3d(0,0,0)"}}
    >
      <img
        src={leaf}
      />
    </div>
  )
}

const Cloud = ({ className, startingPoint }) => {
  const parallax = useParallax({
    translateX: [-20, 0, "easeIn"],
  })

  return (
    <div
      ref={parallax.ref}
      className={className}
      style={{WebkitTransform: "translate3d(0,0,0)"}}
    >
      <img
        src={cloud}
      />
    </div>
  )
}

const Tree = ({ targetElement, dogMeatParallaxEl }) => {
  const dogBgParallax = useParallax({
    targetElement: dogMeatParallaxEl,
    translateY: [0, 350, "easeOut"],
  })

  const dogFgParallax = useParallax({
    targetElement: dogMeatParallaxEl,
    translateY: [0, 350, "easeOut"],
  })

  const graveParallax = useParallax({
    translateY: [100, 0, "easeIn"],
  })

  return (
    <div className="relative w-full overflow-hidden">
      <img
        ref={dogBgParallax.ref}
        style={{WebkitTransform: "translate3d(0,0,0)"}}
        src={dogBg}
        className="absolute -bottom-[5%] left-[17%] w-[57%] z-[0]"
      />
      <div
        className="absolute w-[20%] h-[20%] top-[5%] left-[5%] z-[1]"
        style={{WebkitTransform: "translate3d(0,0,0)"}}
      >
        <img src={sun} className="relative w-full scale-75" />
        <Cloud className="relative -top-[75%] -right-[50%]" />
        <Cloud className="relative -top-[55%] -left-[15%]" />
      </div>
      <img
        src={bush}
        style={{WebkitTransform: "translate3d(0,0,0)"}}
        className="absolute w-[25%] right-[36%] bottom-[10%] -rotate-[30deg] z-[2]"
      />
      <img
        src={tree}
        style={{WebkitTransform: "translate3d(0,0,0)"}}
        className="relative pl-[38%] pt-[16%] z-[3]"
      />
      <img
        src={bush}
        style={{WebkitTransform: "translate3d(0,0,0)"}}
        className="transform translate-y-0 absolute w-[16%] bottom-0 right-[23%] z-[4]"
      />
      <img
        ref={graveParallax.ref}
        src={grave}
        style={{WebkitTransform: "translate3d(0,0,0)"}}
        className="transform translate-y-0 absolute w-[25%] bottom-0 left-[35%] z-[5]"
      />
      <img
        ref={dogFgParallax.ref}
        style={{WebkitTransform: "translate3d(0,0,0)"}}
        src={dogFg}
        className="absolute -bottom-[5%] left-[17%] w-[57%] z-[6]"
      />
      <img
        src={bush}
        style={{WebkitTransform: "translate3d(0,0,0)"}}
        className="transform translate-y-0 absolute w-[14%] bottom-0 left-[15%] z-[7]"
      />
      <Leaf
        targetElement={targetElement}
        startingPoint={-20}
        className="absolute bottom-0 w-[5%] left-[10%] z-[8]"
      />
      <Leaf
        targetElement={targetElement}
        startingPoint={-45}
        className="absolute bottom-[15%] w-[5%] left-[25%] z-[8]"
      />
      <Leaf
        targetElement={targetElement}
        startingPoint={-23}
        className="absolute bottom-[4.5%] w-[5%] left-[62%] z-[8]"
      />
      <Leaf
        targetElement={targetElement}
        startingPoint={-5}
        className="absolute bottom-0 w-[5%] left-[83%] z-[8]"
      />
      <Leaf
        targetElement={targetElement}
        startingPoint={-28}
        className="absolute bottom-0 w-[5%] right-0 z-[8]"
      />
    </div>
  )
}

const TreeScene = ({ dogMeatParallaxEl }) => {
  const [isDisabled, disableParallax] = useState(false)
  const refParallax = useRef()

  const parallaxDesktop = useParallax({
    targetElement: refParallax.current,
    translateY: [-50, 0, "eastIn"],
  })

  return (
    <div className="flex flex-1 md:flex-row flex-col-reverse h-full transition ease-in">
      <div className="flex-1 md:self-end">
        <div ref={parallaxDesktop.ref} className="hidden md:block relative">
          <Tree targetElement={refParallax.current} dogMeatParallaxEl={dogMeatParallaxEl} />
        </div>
        <div className="md:hidden w-full p-8 md:p-24 lg:p-0 !pb-0">
          <Tree dogMeatParallaxEl={dogMeatParallaxEl} />
        </div>
      </div>
      <div className="flex md:items-end md:text-right flex-1 px-8 md:px-24 flex-col">
        <div className="flex-1 w-full">
          <div className="h-[0%]" ref={refParallax}></div>
        </div>
        <div className="pt-16 md:pt-0">
          <h2 className="text-3xl uppercase font-black text-red-500 py-12 md:text-right">Happy and stress free dogs</h2>
          <p className="text-gray-500 leading-relaxed text-xl font-light">Regardless if the dog is reared on a farm or caught in the wild, all our dogs are assured to have lived a peaceful and joyful life</p>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  )
}

const MeatSlices = ({ targetElement }) => {
  const slice1Parallax = useParallax({
    targetElement,
    rotate: [0, 60, "eastIn"],
  })

  const slice2Parallax = useParallax({
    targetElement,
    rotate: [0, 30, "eastIn"],
    translateY: [0, -100, "eastOut"],
  })

  return (
    <div className="relative">
      <img className="relative z-10" ref={slice1Parallax.ref} src={meat} />
      <img className="absolute top-0 origin-bottom-right" ref={slice2Parallax.ref} src={meat} />
    </div>
  )
}

const MeatScene = ({ dogMeatParallaxEl, dogMeatParallaxRef }) => {
  const desktopMeatParallax = useParallax({
    targetElement: dogMeatParallaxEl,
    translateY: [-95, 350, "easeOut"],
  })

  const mobileMeatParallax = useParallax({
    targetElement: dogMeatParallaxEl,
    translateY: [-94, 170, "easeOut"],
  })

  return (
    <div className="flex md:flex-row flex-col h-full transition ease-in flex-1">
      <div className="md:flex-1 h-[170px] md:h-auto overflow-hidden">
        <div ref={desktopMeatParallax.ref} className="hidden md:block w-[47%] ml-[18%] relative">
          <MeatSlices targetElement={dogMeatParallaxEl} />
        </div>
        <div ref={mobileMeatParallax.ref} className="block md:hidden w-[38%] ml-[25%] relative">
          <MeatSlices targetElement={dogMeatParallaxEl} />
        </div>
      </div>
      <div className="flex md:items-end lg:text-right flex-1 px-8 md:px-24 flex-col">
        <div className="flex-1 w-full">
        </div>
        <div>
          <h2 className="text-3xl uppercase font-black text-red-50 pt-0 md:py-12">Humanely harvested</h2>
          <p className="text-red-100 leading-relaxed text-xl font-light py-4">
            Dog on our farms are harvested early (6 months old) in order to offer the most tender and delicious meat.
          </p>
          <p ref={dogMeatParallaxRef} className="text-red-100 leading-relaxed text-xl font-light py-4">
            The dogs are handled with the upmost respect and care. PuppyBox only accept the most humane slaughter techniques.
          </p>
          <p className="text-red-100 leading-relaxed text-xl font-light py-4">
            A painless and humane death.
          </p>
        </div>
        <div className="flex-1 w-full">
        </div>
      </div>
    </div>
  )
}

const ProductRangeScene = ({quantity}) => {
  const currency = useCurrency()
  const parallaxRefEl = useRef()
  const desktopParallax = useParallax({
    translateY: [-30, 0, "easeIn"],
    targetElement: parallaxRefEl.current,
  })

  return (
    <div className="flex flex-1 flex-col md:flex-row">
      <div className="self-start" ref={parallaxRefEl}></div>
      <div className="flex flex-1 flex-col justify-center">
        <div className="px-8 py-8 md:px-12 pt-24 md:pt-8">
          <h2 className="text-3xl uppercase font-black text-red-500 pt-0 md:py-12">Fully customisable box</h2>
          <p className="text-grey-500 leading-relaxed text-xl font-light py-4">
            Choose from a wide-range of meat from many dog breeds. We offer everything from free-range pug nuggets to wild-caught Alaskan husky leg
          </p>
          <p className="text-grey-500 leading-relaxed text-xl font-light py-4">
            All our meats are freshly harvested before being added to your box. We only deliver high quality dog meat and nothing else
          </p>
        </div>
      </div>
      <div ref={desktopParallax.ref} className="hidden md:flex flex-1 flex-col pb-24 md:pb-0 md:pr-24 justify-center">
        <div className="w-64 self-center md:self-end">
          <Product
            label="Free-range"
            dog="Corgis"
            meat="Steak"
            meatImage={meatStudio}
            dogImage={headshot}
            currency={currency}
            quantity={2}
            quantityInBox={quantity}
            price={Math.round(12 * currency.rate * 100) / 100}
          />
        </div>
      </div>
      <div className="flex md:hidden flex-1 flex-col pb-24 md:pb-0 md:pr-24 justify-center">
        <div className="w-64 self-center md:self-end relative">
          <Product
            label="Free-range"
            dog="Corgis"
            meat="Steak"
            meatImage={meatStudio}
            dogImage={headshot}
            currency={currency}
            quantity={2}
            quantityInBox={quantity}
            price={Math.round(12 * currency.rate * 100) / 100}
          />
        </div>
      </div>
    </div>
  )
}

const DeliveredToYourDoorScene = ({ showBox, setQuantity }) => {
  const desktopParallaxRef = useRef()
  const desktopParallax = useParallax({
    targetElement: desktopParallaxRef.current,
    translateY: [-25, 25, "easeOut"],
    onProgressChange: (progress) => {
      if (progress > 0 && !showBox) {
        setQuantity(1)
      } else if (progress <= 0 && showBox) {
        setQuantity(0)
      }
    }
  })
  const desktopParallaxBox = useParallax({
    targetElement: desktopParallaxRef.current,
    translateY: [-1200, 0, "easeIn"],
    translateX: [208, 0, "easeIn"],
    scale: [3, 1, "easeIn"]
  })

  return (
    <div className="flex flex-1 flex-col md:flex-row-reverse">
      <div ref={desktopParallax.ref} className="hidden md:flex flex-1 justify-center flex-col md:pr-24">
        <div className="relative w-full p-8 md:p-0 self-center md:w-96 md:self-end">
          <div className={`w-[10%] absolute top-[66%] left-[41%] ${showBox ? "opacity-1" : "opacity-0"} transition-opacity duration-300 drop-shadow-md`}>
            <img ref={desktopParallaxBox.ref} src={box} />
          </div>
          <img className="w-[100%]" src={home} />
        </div>
      </div>
      <div className="md:hidden flex flex-1 justify-center flex-col md:pr-24">
        <div className="relative w-full p-8 md:p-0 self-center md:w-96 md:self-end">
          <div className={`w-[10%] absolute top-[66%] left-[41%] ${showBox ? "opacity-1" : "opacity-0"} transition-opacity duration-300 drop-shadow-md`}>
            <img src={box} />
          </div>
          <img className="w-[100%]" src={home} />
        </div>
      </div>
      <div className="self-start" ref={desktopParallaxRef}></div>
      <div className="flex flex-1 justify-center flex-col">
        <div className="px-8 md:px-12 pb-24 md:pb-0">
          <h2 className="text-3xl uppercase font-black text-red-500 pt-0 md:py-12">Delivered to your door</h2>
          <p className="text-grey-500 leading-relaxed text-xl font-light py-4">
            Your custom box will be delivered to your door the next working day
          </p>
          <p className="text-grey-500 leading-relaxed text-xl font-light py-4">
            Or you can choose to subscribe and receive your box of tasty meat weekly, bi-weekly or monthly
          </p>
        </div>
      </div>
    </div>
  )
}

const NoPet = ({}) => {
  const collarRef = useRef()
  const earTagRef = useRef()

  const collarParallax = useParallax({
    targetElement: collarRef.current,
    opacity: [1, 0]
  })
  const earTagParallax = useParallax({
    targetElement: earTagRef.current,
    opacity: [0, 1],
    translateY: [10, 0, "easeOut"]
  })
  const badgeParallax = useParallax({
    targetElement: earTagRef.current,
    opacity: [0, 1, "easeOut"],
    scale: [2, 1, "easeOut"],
    rotate: [0, -25, "easeOut"],
  })

  return (
    <div className="flex flex-1 flex-col md:flex-row-reverse relative">
      <div className="flex flex-1 flex-col">
        <div className="min-h-[75vh] md:h-[75vh] md:min-h-[700px] flex justify-center p-8 flex-col">
          <div ref={collarRef}>
            <h2
              className="text-6xl uppercase font-black text-red-500 pt-0 md:py-12"
            >
              <span className="text-gray-300 text-9xl">WTF!</span>
              <br />
              <span>Dogs are pets!</span>
            </h2>
          </div>
        </div>
        <div ref={earTagRef}></div>
        <div className="md:h-[75vh] md:min-h-[900px] flex flex-col justify-center p-8">
          <div>
            <h2
              className="text-6xl uppercase font-black text-[#DFC267] pt-0 md:py-12 md:text-9xl"
            >
              Not ours!
            </h2>
            <p className="text-gray-400 leading-relaxed text-xl font-light py-4">
              All our dogs are <strong>100% not a pet certified</strong> and <strong>100% reared for meat</strong> (like pigs, cows, chickens or all other animals you are normally eating).
              Puppy Box is committed to never harvesting dogs that are, or used to be pet waiting for re-homing
            </p>
            <p className="text-gray-400 leading-relaxed text-xl font-light py-4">
              All our dogs are checked for micro-chip if caught in the wild and tagged at birth on our farms.
            </p>
            <p className="text-gray-400 leading-relaxed text-xl font-light py-4">
              You can enjoy dog meat with total peace of mind
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row sticky md:relative bottom-0">
        <div style={{ backgroundImage: `url(${pet})` }} className="h-[300px] md:h-[75vh] md:min-h-[700px] bg-cover bg-center md:bg-bottom sticky w-full top-0 md:bottom-0 self-start md:self-end relative overflow-hidden md:overflow-visible">
          <div ref={collarParallax.ref} style={{ backgroundImage: `url(${collar})` }} className="w-full bg-cover bg-center md:bg-bottom absolute top-0 left-0 right-0 bottom-0">
          </div>
          <div ref={earTagParallax.ref} style={{ backgroundImage: `url(${earTag})` }} className="w-full bg-cover bg-center md:bg-bottom absolute top-0 left-0 right-0 bottom-0">
          </div>
          <img ref={badgeParallax.ref} src={notDogBadge} className="absolute bottom-4 right-6 md:right-4 w-[35%]" />
        </div>
      </div>
    </div>
  )
}

const StillNotConvinced = () => {
  return (
    <div className="py-12 px-4 md:px-0 my-auto">
      <div className="py-12 flex justify-center items-center flex-col relative">
        <div className="w-full md:max-w-2xl lg:max-w-4xl absolute top-[-23%]">
          <div className="w-[85%] md:w-[50%] mx-auto">
            <img src={health} className="w-full mx-auto" />
          </div>
        </div>
        <h2
          className="text-center text-2xl uppercase font-black text-red-400 drop-shadow-sm pt-0 md:text-6xl z-10 pb-[2%]"
        >
          <span className="text-red-300">Backed by</span> doctors
        </h2>
        <div className="drop-shadow-md overflow-hidden rounded-md w-full h-[240px] sm:h-[315px] md:max-w-2xl md:h-[379px] lg:max-w-4xl lg:h-[504px]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/8v2tOYt-Yls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <a className="mt-12 inline-block bg-red-100 text-red-400 drop-shadow-sm px-4 py-2 text-sm font-bold md:text-lg rounded-md absolute bottom-[-10%] uppercase" href="https://www.cancerresearchuk.org/about-cancer/causes-of-cancer/diet-and-cancer/does-eating-processed-and-red-meat-cause-cancer">Benefits of eating dog meat</a>
      </div>
    </div>
  )
}

const IsThisAJoke = () => {
  const parallax = useParallax({
    translateY: [-25, 50, "easeIn"],
  })

  return (
    <div ref={parallax.ref} className="flex-1 flex flex-col justify-center items-center">
      <h2 className="text-gray-600 text-7xl uppercase font-bold text-center">Is this a <span className="text-red-500">joke</span>?</h2>
    </div>
  )
}

const PigMeatIsAJoke = () => {
  return (
    <div className="h-[100vh] bg-white relative z-[1]">
      <SlicedSection
        image={pigImage}
        header="Is eating animals, more intelligent than dogs,"
        secondHeader="a joke?"
        subtitle={
          <>
            <p className="py-2">Pigs have been proven to be more intelligent than dogs.</p>
            <p className="py-2">This is the world we live in.</p>
            <p className="py-2">Intelligent animals capable to experiencing emotions are slaughtered for no other reasons than convenience and pleasure we take at eating them.</p>
          </>
        }
        cta="Read more"
      />
    </div>
  )
}

const IndexPage = () => {
  const [quantity, setQuantity] = useState(0)
  const [dogMeatParallaxEl, setDogMeatParallaxEl]= useState()
  const dogMeatParallaxRef = useCallback(node => {
    if (node !== null) {
      setDogMeatParallaxEl(node)
    }
  }, [])

  return (
    <>
      <div className="h-[100vh] bg-white relative z-[1]">
        <Hero
          withNav
          image={heroImage}
          header="Dog meat"
          secondHeader="done the right way"
          subtitle="High-quality. Humanely raised. Amazing taste. Delivered to your door."
          cta="Get started"
        />
      </div>

      <ParallaxProvider>
        <div className="bg-[#f1efed]">
          <div className="container mx-auto max-w-7xl">
            <div className="md:min-h-[700px] md:h-[75vh] flex flex-col">
              <div className="relative h-full w-full flex-1 flex flex-col">
                <TreeScene dogMeatParallaxEl={dogMeatParallaxEl} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-600 pb-24 md:pb-0">
          <div className="container mx-auto max-w-7xl">
            <div className="md:min-h-[700px] md:h-[75vh] flex flex-col">
              <div className="relative h-full w-full flex-1 flex flex-col">
                <MeatScene dogMeatParallaxEl={dogMeatParallaxEl} dogMeatParallaxRef={dogMeatParallaxRef} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f1efed]">
          <div className="container mx-auto max-w-7xl">
            <div className="md:min-h-[700px] md:h-[75vh] flex flex-col">
              <ProductRangeScene quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container mx-auto max-w-7xl">
            <div className="md:min-h-[700px] md:h-[75vh] flex flex-col">
              <DeliveredToYourDoorScene setQuantity={setQuantity} showBox={quantity > 0} />
            </div>
          </div>
        </div>
        <div className="bg-[#18191B]">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col">
              <NoPet />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="md:min-h-[1000px] h-[75vh] flex flex-col">
              <StillNotConvinced />
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col h-[100vh]">
              <IsThisAJoke />
            </div>
          </div>
        </div>
        <PigMeatIsAJoke />
      </ParallaxProvider>
    </>
  )
}

export default () => (
  <App>
    <IndexPage />
  </App>
)
