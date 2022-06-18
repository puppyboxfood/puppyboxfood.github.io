import React from "react"
import { useBox } from "../contexts/box"
import { getLocale } from "../utils/locale"

export default ({ quantity, total, currency }) => {
  if (quantity <= 0) {
    return null
  }

  return (
    <div className="bg-gray-900 sticky bottom-0 left-2 right-2 p-2 shadow-xl z-[100]">
      <div className="container mx-auto flex items-center justify-end">
        <div>
          <div className="w-full text-gray-500 font-medium sm:text-base text-xs pr-2">
            <span className="text-gray-400">
              <strong>{quantity} {quantity === 1 ? "item" : "items"}</strong>
            </span>{" "}
            in your box
          </div>
          <div className="text-right">
            <span className="inline-block px-3">
              <span className="text-gray-500 text-lg">{currency.symbol}</span>
              <strong className="text-gray-300 font-black text-2xl">{(total || 0).toLocaleString(getLocale(), { minimumFractionDigits: 2 })}</strong>

            </span>
          </div>
        </div>
        <div className="flex items-end">
          <a
            href="/checkout"
            className="uppercase flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-3 md:text-lg md:px-4"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  )
}
