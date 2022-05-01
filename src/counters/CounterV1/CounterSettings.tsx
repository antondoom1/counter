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

  return (
    <div className={s.settingsBlock}>

      <div className={s.setValuesSection}>
        <h4>Start value:</h4>
        <Input
          inputValue={startValue}
          inputClassName={startValue < 0 || startValue >= maxValue ? s.red : ''}
          onChangeValuesCallback={setStartValueCallback}/>
      </div>

      <div className={s.setValuesSection}>
        <h4>Max value:</h4>
        <Input
          inputValue={maxValue}
          inputClassName={maxValue < 0 || maxValue <= startValue ? s.red : ''}
          onChangeValuesCallback={setMaxValueCallback}/>
      </div>

      <div>
        <Button
          name={'set'}
          buttonClassName={s.setButton}
          disabled={!error || error === 'Incorrect value!'}
          callBack={setValuesHandler}/>
      </div>

    </div>
  )
}

