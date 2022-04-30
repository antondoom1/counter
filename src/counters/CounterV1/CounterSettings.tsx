import React, {ChangeEvent} from 'react'
import s from './CounterSettings.module.css'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {ErrorType} from '../../App'

type CounterSettingsType = {
  startValue: number
  maxValue: number
  error: ErrorType
  setValuesHandler: () => void
  setStartValueCallback: (e: ChangeEvent<HTMLInputElement>) => void
  setMaxValueCallback: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CounterSettings: React.FC<CounterSettingsType> = (
  {
    startValue, maxValue, error, setValuesHandler, setStartValueCallback, setMaxValueCallback
  }
) => {

  // const inputClassName = `${error === 'Incorrect value!' ? s.red : ''}`

  return (
    <div className={s.settingsBlock}>
      <div>
        <h4>Start value:</h4>
        <Input
          inputValue={startValue}
          inputClassName={startValue < 0 || startValue >= maxValue ? s.red : ''}
          onChangeValuesCallback={setStartValueCallback}/>
      </div>

      <div>
        <h4>Max value:</h4>
        <Input
          inputValue={maxValue}
          inputClassName={maxValue < 0 || maxValue <= startValue ? s.red : ''}
          onChangeValuesCallback={setMaxValueCallback}/>
      </div>

      <Button name={'set'} disabled={!error || error === 'Incorrect value!'} buttonClassName={s.setButton} callBack={setValuesHandler}/>

    </div>
  )
}

