import React from "react"
import Option from "./option"
import { RadioGroup } from "@headlessui/react"

export default ({ onSubmit, options, answers }) => {
  const [values, setValues] = useState({})

  return (
    <div>
      {options.map(({ id, text, strikethroughIf }) => (
        <RadioGroup
          key={id}
          value={values[id]}
          className="flex flex-col"
          onChange={(value) => {
            setValues({
              ...values,
              [id]: values[id] ? undefined : id
            })
          }}
        >
          <Option
            id={id}
            label={text}
            strikethrough={!!answers[strikethroughIf]}
            onClick={() => {
              setValues({
                ...values,
                [id]: values[id] ? undefined : id
              })
            }}
          />
        </RadioGroup>
      ))}
      <div className="flex justify-end items-end">
        <button
          className="rounded-lg px-8 py-4 my-1 shadow-md bg-gray-700 uppercase font-bold text-gray-50 hover:bg-gray-900"
          onClick={() => {
            onSubmit(Object.values(values).map((id) => options.find((option) => option.id === id)))
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}
