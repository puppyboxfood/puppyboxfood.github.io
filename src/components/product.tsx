import React from "react"
import exchangeRates from "../data/exchange-rates"
import { getLocale } from "../utils/locale"

const Button = ({quantity, add, remove}) => {
  return quantity > 0 ? (
    <div className="flex flex-row">
      <button
        className="flex-1 uppercase flex items-center justify-center px-3 py-3 border border-transparent text-base font-bold rounded-md text-gray-800 text-sm bg-gray-200 hover:bg-gray-300"
        onClick={remove}
      >
        -
      </button>
      <strong className="flex-[3] flex justify-center items-center text-gray-800">{quantity}</strong>
      <button
        className="flex-1 uppercase flex items-center justify-center px-3 py-3 border border-transparent text-base font-bold rounded-md text-white text-sm bg-red-600 hover:bg-red-700"
        onClick={add}
      >
        +
      </button>
    </div>
  ) : (
    <button
      className="w-full uppercase flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white text-sm bg-red-600 hover:bg-red-700"
      onClick={add}
    >
      Add to box
    </button>
  )
}

export default ({dog, label, dogImage, meat, meatImage, quantity, addToBox, removeFromBox, quantityInBox, price, currency}) => {
  return (
    <div>
      <div className={`${quantityInBox > 0 ? "shadow-sm" : "shadow-md"} rounded-md overflow-hidden bg-white`}>
        <div className="relative">
          <div className="relative h-56 overflow-hidden">
            <svg
              className="absolute z-10 -bottom-10 h-20 w-[calc(100%+1px)] left-0 right-0 text-white"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,50 0,100 100,100 100,0" />
            </svg>
            {dogImage && (<img
              className="absolute z-20 rounded-full w-16 h-16 object-cover bottom-0 right-2 border-4 border-white bg-white"
              src={dogImage}
              alt={dog}
            />)}
            <img
              className="absolute z-0 top-0 left-0 h-full w-full object-cover"
              src={meatImage}
              alt={meat}
            />
          </div>
        </div>
        <div className="py-3 flex flex-col pb-0">
          <div className="w-full sm:w-[74%] px-3">
            <div className="font-light text-gray-300 uppercase text-xs whitespace-nowrap overflow-hidden text-ellipsis">{label}</div>
            <h3 className="font-light text-gray-400 uppercase text-xs whitespace-nowrap overflow-hidden text-ellipsis">{dog}</h3>
            <h2 className="font-medium text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">{meat} <span className="text-gray-400 text-sm">({quantity})</span></h2>
          </div>
          <div className="text-lg sm:text-xl text-right flex flex-1 items-end justify-end border-t border-t-gray-50 mt-4 pt-3">
            <div className="-mt-8">
              <span className="bg-white inline-block px-3">
                <span className="text-gray-400 text-sm">{currency.symbol}</span>
                <strong className="text-gray-500 font-medium">{(price || 0).toLocaleString(getLocale(), { minimumFractionDigits: 2 })}</strong>

              </span>
            </div>
          </div>
        </div>
        <div className="p-2">
          <Button
            add={addToBox}
            remove={removeFromBox}
            quantity={quantityInBox}
          />
        </div>
      </div>
    </div>
  )
}
