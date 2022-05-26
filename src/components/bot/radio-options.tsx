import React from "react"
import { RadioGroup } from "@headlessui/react"
import Option from "./option"
import useDelayedValueChange from "./use-delayed-value-change"

export default ({ onChange, options, answers }) => {
  const [value, setValue, delayPercentage] = useDelayedValueChange((value) => {
    let option = options.find((option) => option.id === value)
    onChange(option)
  })

  return (
    <RadioGroup
      value={value}
      className="flex flex-col"
      onChange={(value) => {
        setValue(value)
      }}
    >
      {options.map(({ id: optionId, text, strikethroughIf }) => (
        <Option
          key={optionId}
          id={optionId}
          strikethrough={!!answers[strikethroughIf]}
          label={text}
          checked={optionId === value}
          percentage={delayPercentage}
        />
      ))}
    </RadioGroup>
  )
}
