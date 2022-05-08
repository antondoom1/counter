import React from 'react'
import {ErrorType} from '../../App'
import s from './CounterV2.module.css'
import {Button} from '../../components/universal-button/Button'
import {CounterSettings} from '../../components/CounterSettings'
import {CounterUI} from '../../components/CounterUI'

type CounterV2Type = {
  number: number
  startValue: number
  maxValue: number
  showCounter: boolean
  error: ErrorType
  incrementHandler: () => void
  resetHandler: () => void
  setValuesHandler: () => void
  showSettingsBlockHandler: () => void
  setStartValueCallback: (newStartValue: number) => void
  setMaxValueCallback: (newMaxValue: number) => void
}

export const CounterV2: React.FC<CounterV2Type> = (
  {
    number,
    startValue,
    maxValue,
    error,
    incrementHandler,
    resetHandler,
    showCounter,
    showSettingsBlockHandler,
    setValuesHandler,
    setStartValueCallback,
    setMaxValueCallback
  }
) => {

  return (

    <div className={s.counterWrapper}>

      {
        showCounter
          ?
          <div className={s.displayWrapper}>
            <CounterUI
              number={number}
              startValue={startValue}
              maxValue={maxValue}
              incrementHandler={incrementHandler}
              resetHandler={resetHandler}/>
            <Button name={'set'} disabled={false} buttonClassName={s.setButton} callBack={showSettingsBlockHandler}/>
          </div>

          :
          <div>
            <CounterSettings
              startValue={startValue}
              maxValue={maxValue}
              error={error}
              setValuesHandler={setValuesHandler}
              setStartValueCallback={setStartValueCallback}
              setMaxValueCallback={setMaxValueCallback}/>
          </div>
      }

    </div>
  )
}
