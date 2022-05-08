import React from 'react'
import s from './CounterV1.module.css'
import {CounterSettings} from '../../components/CounterSettings'
import {CounterUI} from '../../components/CounterUI'
import {ErrorType} from '../../App'

type CounterV1Type = {
  number: number
  startValue: number
  maxValue: number
  error: ErrorType
  incrementHandler: () => void
  resetHandler: () => void
  setValuesHandler: () => void
  setStartValueCallback: (newStartValue: number) => void
  setMaxValueCallback: (newMaxValue: number) => void
}

export const CounterV1: React.FC<CounterV1Type> = (
  {
    number,
    startValue,
    maxValue,
    error,
    incrementHandler,
    resetHandler,
    setValuesHandler,
    setStartValueCallback,
    setMaxValueCallback
  }
) => {

  const errorMessageClassName = `${s.errorMessage} ${error === 'Incorrect value!' ? s.red : ''}`

  return (

    <div className={s.counterWrapper}>

      <CounterSettings
        startValue={startValue}
        maxValue={maxValue}
        error={error}
        setValuesHandler={setValuesHandler}
        setStartValueCallback={setStartValueCallback}
        setMaxValueCallback={setMaxValueCallback}/>

      <div className={s.displayWrapper}>
        {error
          ? <div className={errorMessageClassName}>{error}</div>
          : <CounterUI
            number={number}
            startValue={startValue}
            maxValue={maxValue}
            incrementHandler={incrementHandler}
            resetHandler={resetHandler}/>
        }
      </div>


    </div>
  )
}
