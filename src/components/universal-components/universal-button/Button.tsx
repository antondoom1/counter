import React from 'react'

type ButtonType = {
  name: string
  disabled?: boolean
  buttonClassName: string
  callBack: () => void
}

export const Button: React.FC<ButtonType> = ({name, disabled, callBack, buttonClassName}) => {

  return (
    <button
      onClick={callBack}
      className={buttonClassName}
      disabled={disabled}>{name}
    </button>
  )
}

