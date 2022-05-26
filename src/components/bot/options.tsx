import React from "react"
import CheckboxOptions from "./checkbox-options"
import RadioOptions from "./radio-options"

export default ({ onChange, onSubmit, options, multipleChoice, answers }) => {
  if (multipleChoice) {
    return <CheckboxOptions onSubmit={onSubmit} options={options} answers={answers} />
  }

  return <RadioOptions onChange={onChange} options={options} answers={answers} />
}
