import React from "react"
import useDelayedValueChange from "./use-delayed-value-change"

export default ({ onChange, min, max }) => {
  const [value, setValue, delayPercentage] = useDelayedValueChange(onChange)

  return (
    <div className="mt-2 rounded-lg shadow-md bg-gray-300 self-end w-[85%]">
      <div
        className="rounded-lg flex flex-row justify-end"
        style={{
          background: value && delayPercentage !== undefined ? `linear-gradient(90deg, rgb(156 163 175) 0%, rgb(156 163 175) ${delayPercentage}%, rgb(209 213 219) ${delayPercentage}%, rgb(209 213 219) 100%)` : undefined
        }}
      >
        {[...Array((max + 1) - min).keys()].map((n, index) => {
          const val = n + min
          const checked = value === val

          return (
            <button
              key={val}
              onClick={() => setValue(val)}
              className={`
                flex-1 text-center px-2 py-4 first:rounded-l-lg last:rounded-r-lg font-medium
                ${checked ? "bg-gray-500 text-gray-50" : "text-gray-500"}
                ${!!value ? "hover:bg-gray-600 hover:text-gray-300" : "hover:bg-gray-200 "}
              `}>
              {val}
            </button>
          )
        })}
      </div>
    </div>
  )
}
