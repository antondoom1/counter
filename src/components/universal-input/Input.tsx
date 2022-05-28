import React, {ChangeEvent} from 'react'

type InputType = {
  inputValue: number
  inputClassName: string
  onChangeValuesCallback: (newValue: number) => void
}

export const Input: React.FC<InputType> = ({inputValue, inputClassName, onChangeValuesCallback}) => {

  const onChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeValuesCallback(+e.currentTarget.value)
  }

  return (
    <input
      type={'number'}
      value={inputValue}
      className={inputClassName}
      onChange={(e) => onChangeValuesCallback(+e.currentTarget.value)}/>
  )
}
