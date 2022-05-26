import React, { Fragment } from "react"
import { Listbox } from "@headlessui/react"
import currencies from "../data/currencies"

const SelectCurrencyInline = ({ selectedCurrency, onClick }) => (
  <div className="px-2">
    {Object.entries(currencies).map(([currency, details]) => (
      <a
        key={currency}
        href="#"
        onClick={(e) => {
          e.preventDefault()
          onClick(currency)
        }}
        className={`inline-block py-2 px-2 text-base font-medium mr-1 rounded-md ${currency === selectedCurrency ? "ring-red-500 ring-2 ring-inset" : ""}`}
      >
        <strong className="text-gray-500">{details.symbol}</strong>
        {" "}
        <span className="text-gray-700">{currency}</span>
      </a>
    ))}
  </div>
)

const SelectCurrency = ({ selectedCurrency, onClick }) => (
  <div>
    <Listbox value={selectedCurrency} onChange={onClick}>
      {({ open }) => (
        <>
          <Listbox.Button className={`${open ? "hidden" : "block"} font-medium text-red-500 hover:text-red-600`}>{selectedCurrency}</Listbox.Button>
          <Listbox.Options>
            {Object.entries(currencies).map(([currency, details]) => (
              <Listbox.Option
                key={currency}
                value={currency}
                className={`font-medium cursor-pointer ${selectedCurrency === currency ? "text-red-600" : "text-gray-500 hover:text-red-500"}`}
              >
                {currency}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  </div>
)

export default ({ variant, ...props }) => (
  variant === "inline" ? (
    <SelectCurrencyInline {...props} />
  ) : (
    <SelectCurrency {...props} />
  )
)
