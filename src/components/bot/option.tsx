import React from "react"
import { RadioGroup } from "@headlessui/react"
import { CheckIcon, ChatAltIcon } from "@heroicons/react/solid"

export default ({ id, checked, label, percentage, onClick, strikethrough }) => (
  <RadioGroup.Option
    value={id}
    disabled={strikethrough}
    className="relative my-1 cursor-pointer focus:outline-none self-end w-[75%]"
  >
    {({ active, checked }) => (
      <div
        onClick={strikethrough ? undefined : onClick}
        className={
          `${
            active
              ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-300'
              : ''
            }
            ${
              checked ? 'bg-gray-500 text-gray-50' : 'bg-gray-300 hover:bg-gray-200'
            }
            rounded-lg px-4 py-4 ${strikethrough ? "opacity-50" : "shadow-md"}`
        }
        style={{
          background: checked && percentage !== undefined ? `linear-gradient(90deg, rgb(31 41 55) 0%, rgb(31 41 55) ${percentage}%, rgb(75 85 99) ${percentage}%, rgb(75 85 99) 100%)` : undefined
        }}
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <div className="text-md">
              <RadioGroup.Label
                as="p"
                className={`font-medium  ${
                  checked ? 'text-white' : 'text-gray-500'
                } ${strikethrough ? "line-through" : ""}`}
              >
                {label}
              </RadioGroup.Label>
            </div>
          </div>
          <div className="shrink-0 text-white">
            {strikethrough ? (
              <ChatAltIcon className={`h-5 w-5 ${checked ? "text-white" : "text-gray-400"}`} />
            ) : (
              <CheckIcon className={`h-6 w-6 ${checked ? "text-white" : "text-gray-300"}`} />
            )}
          </div>
        </div>
      </div>
    )}
  </RadioGroup.Option>
)
