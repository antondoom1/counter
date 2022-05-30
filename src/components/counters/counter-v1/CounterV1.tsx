import React, {useState} from 'react'
import s from './CounterV1.module.css'
import {CounterSettings} from '../../universal-components/counter-settings/CounterSettings'
import {CounterUI} from '../../universal-components/counter-ui/CounterUI'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../state/store'
import {
  CounterType,
  incrementNumberAC,
  resetNumberAC,
  setNewMaxValueAC,
  setNewStartValueAC
} from '../../../state/counters-reducer'

type ErrorType = 'Incorrect value!' | 'Enter correct values and press "set"' | null

export const CounterV1 = () => {

  const dispatch = useDispatch()
  const counterV1 = useSelector<AppRootStateType, CounterType>(state => state.counters[0])
  let [error, setError] = useState<ErrorType>(null)

  const incrementNumber = () => {
    dispatch(incrementNumberAC(counterV1.counterId))
  }
  const resetNumber = () => {
    dispatch(resetNumberAC(counterV1.counterId))
  }
  const setNewStartValue = (newStartValue: number) => {
    setError('Enter correct values and press "set"')
    if (newStartValue < 0 || newStartValue >= counterV1.maxValue) {
      setError('Incorrect value!')
    }
    dispatch(setNewStartValueAC(counterV1.counterId, newStartValue))
  }
  const setNewMaxValue = (newMaxValue: number) => {
    setError('Enter correct values and press "set"')
    if (newMaxValue < 0 || newMaxValue <= counterV1.minValue) {
      setError('Incorrect value!')
    }
    dispatch(setNewMaxValueAC(counterV1.counterId, newMaxValue))
  }
  const setValues = () => {
    if (counterV1.minValue < counterV1.maxValue && counterV1.minValue >= 0) {
      dispatch(resetNumberAC(counterV1.counterId))
      setError(null)
    }
  }

  if (counterV1.minValue >= counterV1.maxValue || counterV1.minValue < 0 || counterV1.maxValue < 0 || counterV1.maxValue >= 10000) error = 'Incorrect value!'

  const errorMessageClassName = `${s.errorMessage} ${error === 'Incorrect value!' ? s.red : ''}`

  return (

    <div className={s.counterWrapper}>

      <CounterSettings
        startValue={counterV1.minValue}
        maxValue={counterV1.maxValue}
        disableSetValuesButton={!error || error === 'Incorrect value!'}
        setValuesHandler={setValues}
        setStartValueCallback={setNewStartValue}
        setMaxValueCallback={setNewMaxValue}/>

      <div className={s.displayWrapper}>
        {error
          ? <div className={errorMessageClassName}>{error}</div>
          : <CounterUI
            number={counterV1.number}
            startValue={counterV1.minValue}
            maxValue={counterV1.maxValue}
            incrementHandler={incrementNumber}
            resetHandler={resetNumber}/>
        }
      </div>

    </div>
  )
}
