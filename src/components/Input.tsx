import React from 'react'

type InputType = {
  inputValue: number
  inputClassName: string
  onChangeValuesCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputType> = ({inputValue, inputClassName, onChangeValuesCallback}) => {
  return (
    <input
      type={'number'}
      value={inputValue}
      className={inputClassName}
      onChange={onChangeValuesCallback}/>
  )
}
