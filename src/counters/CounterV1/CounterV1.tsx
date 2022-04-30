import React, {ChangeEvent} from 'react'
import s from './CounterV1.module.css'
import {CounterSettings} from './CounterSettings'
import {CounterUI} from './CounterUI'
import {ErrorType} from '../../App'

type CounterV1Type = {
  number: number
  startValue: number
  maxValue: number
  error: ErrorType
  incrementHandler: () => void
  resetHandler: () => void
  setValuesHandler: () => void
  setStartValueCallback: (e: ChangeEvent<HTMLInputElement>) => void
  setMaxValueCallback: (e: ChangeEvent<HTMLInputElement>) => void
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

      {
        error
          ? <div className={errorMessageClassName}>{error}</div>
          : <CounterUI
            number={number}
            maxValue={maxValue}
            incrementHandler={incrementHandler}
            resetHandler={resetHandler}/>
      }

    </div>
  )
}
