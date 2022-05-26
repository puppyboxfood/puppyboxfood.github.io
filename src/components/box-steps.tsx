import * as React from "react"

const Step = ({ isActive, title, number, isFirst, isLast, isComplete }) => (
  <div className="flex flex-col justify-center items-center w-28 sm:w-36 md:w-48 lg:w-56 xl:w-64 relative">
    <div className={`z-0 border-t border-t-gray-200 left-0 right-0 absolute top-[27%] ${isFirst ? "left-[50%]" : ""} ${isLast ? "right-[50%]" : ""}`}></div>
    <div className={`z-10 left-0 right-0 absolute top-[27%] ${isFirst ? "left-[50%]" : ""} ${isLast ? "right-[50%]" : ""}`}>
      <div className={`border-t border-t-red-500 ${!isActive && !isComplete ? "w-[0%]" : ""} ${isComplete ? "w-[100%]" : ""} ${isActive && !isComplete ? "w-[50%]" : ""}`}></div>
    </div>
    <div className="flex flex-col justify-center items-center w-20 sm:w-22 relative z-20">
      <div className={`rounded-full w-8 h-8 flex ring-8 ring-white justify-center items-center font-bold ${isActive ? "bg-red-500 text-red-50" : "bg-gray-200 text-gray-400"}`}>{number}</div>
      <h2 className="font-thin uppercase text-xs text-gray-500 py-2 text-center mt-2 h-[2em]">{title}</h2>
    </div>
  </div>
)

export default ({ quantity, currentStep }) => (
  <div className="flex flex-row justify-center items-center h-36 bg-white top-0 z-30">
    <Step number={1} isFirst isComplete={(quantity || 0) > 0 || currentStep > 1} isActive={currentStep >= 1} title="Customise your box" />
    <Step number={2} title="Checkout your order" isComplete={currentStep > 2} isActive={currentStep >= 2} />
    <Step number={3} isLast isComplete={currentStep >= 3} isActive={currentStep >= 3}  title="Enjoy your dog meat" />
  </div>
)

