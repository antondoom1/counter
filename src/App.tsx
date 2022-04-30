import React, {ChangeEvent, useEffect, useState} from 'react'
import './App.css'
import {CounterV1} from './counters/CounterV1/CounterV1'

export type ErrorType = 'Incorrect value!' | 'Enter correct values and press "set"' | null

function App() {

  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(5)
  const [number, setNumber] = useState(minValue)
  let [error, setError] = useState<ErrorType>(null)

  useEffect(() => {
    let startValueAsString = localStorage.getItem('start value')
    let maxValueAsString = localStorage.getItem('max value')
    if (startValueAsString && maxValueAsString) {
      setMinValue(JSON.parse(startValueAsString))
      setMaxValue(JSON.parse(maxValueAsString))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('start value', JSON.stringify(minValue))
    localStorage.setItem('max value', JSON.stringify(maxValue))
  }, [minValue, maxValue])

  const incrementHandler = () => number < maxValue && setNumber(number + 1)
  const resetHandler = () => setNumber(minValue)
  const setValuesHandler = () => {
    if (minValue < maxValue && minValue >= 0) {
      setNumber(minValue)
      setError(null)
    }
  }

  const setStartValueCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartValue = +e.currentTarget.value
    setError('Enter correct values and press "set"')
    if (newStartValue < 0 || newStartValue >= maxValue) {
      setError('Incorrect value!')
    }
    setMinValue(newStartValue)
  }
  const setMaxValueCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = +e.currentTarget.value
    setError('Enter correct values and press "set"')
    if (newMaxValue < 0 || newMaxValue <= minValue) {
      setError('Incorrect value!')
    }
    setMaxValue(newMaxValue)
  }

  if (minValue >= maxValue || minValue < 0 || maxValue < 0) error = 'Incorrect value!'

  return (
    <div className="app">

      <CounterV1
        number={number}
        startValue={minValue}
        maxValue={maxValue}
        error={error}
        incrementHandler={incrementHandler}
        resetHandler={resetHandler}
        setValuesHandler={setValuesHandler}
        setStartValueCallback={setStartValueCallback}
        setMaxValueCallback={setMaxValueCallback}/>

    </div>
  )
}

export default App
