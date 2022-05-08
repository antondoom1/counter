import React, {useEffect, useState} from 'react'
import './App.css'
import {CounterV1} from './counters/CounterV1/CounterV1'
import {CounterV2} from './counters/CounterV2/CounterV2'

export type ErrorType = 'Incorrect value!' | 'Enter correct values and press "set"' | null
type CountersStateType = {
  counterId: number
  minValue: number
  maxValue: number
  number: number
}

function App() {
  const [counters, setCounters] = useState<CountersStateType[]>([
    {counterId: 1, minValue: 0, maxValue: 5, number: 0},
    {counterId: 2, minValue: 0, maxValue: 5, number: 0}
  ])
  const [showCounter, setShowCounter] = useState<boolean>(true)
  let [error, setError] = useState<ErrorType>(null)

  useEffect(() => {
    let startValueCounterV1AsString = localStorage.getItem('start value of counter v1')
    let maxValueCounterV1AsString = localStorage.getItem('max value of counter v1')
    let startValueCounterV2AsString = localStorage.getItem('start value of counter v2')
    let maxValueCounterV2AsString = localStorage.getItem('max value of counter v2')

    setCounters(counters.map(c =>
      c.counterId === 1 && startValueCounterV1AsString && maxValueCounterV1AsString
        ?
        {
          ...c,
          minValue: JSON.parse(startValueCounterV1AsString),
          maxValue: JSON.parse(maxValueCounterV1AsString),
          number: JSON.parse(startValueCounterV1AsString)
        } :
        c.counterId === 2 && startValueCounterV2AsString && maxValueCounterV2AsString
          ?
          {
            ...c,
            minValue: JSON.parse(startValueCounterV2AsString),
            maxValue: JSON.parse(maxValueCounterV2AsString),
            number: JSON.parse(startValueCounterV2AsString)
          } : c
    ))
  }, [])
  useEffect(() => {
    localStorage.setItem('start value of counter v1', JSON.stringify(counters[0].minValue))
    localStorage.setItem('max value of counter v1', JSON.stringify(counters[0].maxValue))
    localStorage.setItem('start value of counter v2', JSON.stringify(counters[1].minValue))
    localStorage.setItem('max value of counter v2', JSON.stringify(counters[1].maxValue))
  }, [counters.map(c => c)])

  const incrementNumber = (counterId: number, number: number, maxValue: number) => {
    // if (number < maxValue)
      setCounters(counters.map(c => c.counterId === counterId ? {...c, number: c.number + 1} : c))
  }
  const resetNumber = (counterId: number) => {
    setCounters(counters.map(c => c.counterId === counterId ? {...c, number: c.minValue} : c))
  }
  const setStartValue = (counterId: number, maxValue: number, newStartValue: number) => {
    setError('Enter correct values and press "set"')
    if (newStartValue < 0 || newStartValue >= maxValue) {
      setError('Incorrect value!')
    }
    setCounters(counters.map(c => c.counterId === counterId ? {...c, minValue: newStartValue} : c))
  }
  const setNewMaxValue = (counterId: number, minValue: number, newMaxValue: number) => {
    setError('Enter correct values and press "set"')
    if (newMaxValue < 0 || newMaxValue <= minValue) {
      setError('Incorrect value!')
    }
    setCounters(counters.map(c => c.counterId === counterId ? {...c, maxValue: newMaxValue} : c))
  }

  const setValues = (counterId: number, minValue: number, maxValue: number) => {
    if (minValue < maxValue && minValue >= 0) {
      setCounters(counters.map(c => c.counterId === counterId ? {...c, number: minValue} : c))
      setError(null)
      setShowCounter(!showCounter)
    }
  }

  const showSettingsBlock = () => {
    setShowCounter(!showCounter)
  }

  if (counters[0].minValue >= counters[0].maxValue || counters[0].minValue < 0 || counters[0].maxValue < 0) error = 'Incorrect value!'

  return (
    <div className="app">

      Counter version 1:

      {
        counters.map(c => {
          if (c.counterId === 1)
            return (
              <CounterV1
                key={c.counterId}
                number={c.number}
                startValue={c.minValue}
                maxValue={c.maxValue}
                error={error}
                incrementHandler={() => incrementNumber(c.counterId, c.number, c.maxValue)}
                resetHandler={() => resetNumber(c.counterId)}
                setValuesHandler={() => setValues(c.counterId, c.minValue, c.maxValue)}
                setStartValueCallback={(newStartValue) => setStartValue(c.counterId, c.maxValue, newStartValue)}
                setMaxValueCallback={(newMaxValue) => setNewMaxValue(c.counterId, c.minValue, newMaxValue)}/>
            )
        })
      }

      <hr/>

      Counter version 2:

      {counters.map(c => {
        if (c.counterId === 2)
          return (
            <CounterV2
              key={c.counterId}
              number={c.number}
              startValue={c.minValue}
              maxValue={c.maxValue}
              error={error}
              showCounter={showCounter}
              incrementHandler={() => incrementNumber(c.counterId, c.number, c.maxValue)}
              resetHandler={() => resetNumber(c.counterId)}
              setStartValueCallback={(newStartValue) => setStartValue(c.counterId, c.maxValue, newStartValue)}
              setMaxValueCallback={(newMaxValue) => setNewMaxValue(c.counterId, c.minValue, newMaxValue)}
              setValuesHandler={() => setValues(c.counterId, c.minValue, c.maxValue)}
              showSettingsBlockHandler={showSettingsBlock}
            />
          )
      })}

    </div>
  )
}

export default App
