import React, {useEffect, useState} from 'react'
import './App.css'
import {CounterV1} from './counters/CounterV1/CounterV1'
import {CounterV2} from './counters/CounterV2/CounterV2'
import {useDispatch, useSelector} from 'react-redux'
import {
  initialStateType,
  incrementNumberAC,
  resetNumberAC,
  setNewMaxValueAC,
  setNewStartValueAC
} from './state/counters-reducer'
import {AppRootStateType} from './state/store'

export type ErrorType = 'Incorrect value!' | 'Enter correct values and press "set"' | null

function App() {

  const dispatch = useDispatch()
  const counters = useSelector<AppRootStateType, initialStateType[]>(state => state.counters)

  const [showCounter, setShowCounter] = useState<boolean>(true)
  let [error, setError] = useState<ErrorType>(null)

  // useEffect(() => {
  //   let startValueCounterV1AsString = localStorage.getItem('start value of counter v1')
  //   let maxValueCounterV1AsString = localStorage.getItem('max value of counter v1')
  //   let startValueCounterV2AsString = localStorage.getItem('start value of counter v2')
  //   let maxValueCounterV2AsString = localStorage.getItem('max value of counter v2')
  //
  //   setCounters(counters.map(c =>
  //     c.counterId === 1 && startValueCounterV1AsString && maxValueCounterV1AsString
  //       ?
  //       {
  //         ...c,
  //         minValue: JSON.parse(startValueCounterV1AsString),
  //         maxValue: JSON.parse(maxValueCounterV1AsString),
  //         number: JSON.parse(startValueCounterV1AsString)
  //       } :
  //       c.counterId === 2 && startValueCounterV2AsString && maxValueCounterV2AsString
  //         ?
  //         {
  //           ...c,
  //           minValue: JSON.parse(startValueCounterV2AsString),
  //           maxValue: JSON.parse(maxValueCounterV2AsString),
  //           number: JSON.parse(startValueCounterV2AsString)
  //         } : c
  //   ))
  // }, [])
  // useEffect(() => {
  //   localStorage.setItem('start value of counter v1', JSON.stringify(counters[0].minValue))
  //   localStorage.setItem('max value of counter v1', JSON.stringify(counters[0].maxValue))
  //   localStorage.setItem('start value of counter v2', JSON.stringify(counters[1].minValue))
  //   localStorage.setItem('max value of counter v2', JSON.stringify(counters[1].maxValue))
  // }, [counters.map(c => c)])

  const incrementNumber = (counterId: number) => {
    dispatch(incrementNumberAC(counterId))
  }
  const resetNumber = (counterId: number) => {
    dispatch(resetNumberAC(counterId))
  }
  const setNewStartValue = (counterId: number, maxValue: number, newStartValue: number) => {
    if (counterId === 1) setError('Enter correct values and press "set"')
    if (newStartValue < 0 || newStartValue >= maxValue) {
      if (counterId === 1) setError('Incorrect value!')
    }
    dispatch(setNewStartValueAC(counterId, newStartValue))
  }
  const setNewMaxValue = (counterId: number, minValue: number, newMaxValue: number) => {
    if (counterId === 1) setError('Enter correct values and press "set"')
    if (newMaxValue < 0 || newMaxValue <= minValue) {
      if (counterId === 1) setError('Incorrect value!')
    }
    dispatch(setNewMaxValueAC(counterId, newMaxValue))
  }
  const setValues = (counterId: number, minValue: number, maxValue: number) => {
    if (minValue < maxValue && minValue >= 0) {
      dispatch(resetNumberAC(counterId))
      if (counterId === 1) setError(null)
      if (counterId === 2) setShowCounter(!showCounter)
    }
  }
  const showSettingsBlock = () => {
    setShowCounter(!showCounter)
  }

  if (counters[0].minValue >= counters[0].maxValue || counters[0].minValue < 0 || counters[0].maxValue < 0 || counters[0].maxValue >= 10000) error = 'Incorrect value!'

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
                disableSetValuesButton={!error || error === 'Incorrect value!'}
                error={error}
                incrementHandler={() => incrementNumber(c.counterId)}
                resetHandler={() => resetNumber(c.counterId)}
                setValuesHandler={() => setValues(c.counterId, c.minValue, c.maxValue)}
                setStartValueCallback={(newStartValue) => setNewStartValue(c.counterId, c.maxValue, newStartValue)}
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
              disableSetValuesButton={c.maxValue < 0 || c.minValue < 0 || c.maxValue <= c.minValue || c.maxValue >= 10000}
              showCounter={showCounter}
              incrementHandler={() => incrementNumber(c.counterId)}
              resetHandler={() => resetNumber(c.counterId)}
              setStartValueCallback={(newStartValue) => setNewStartValue(c.counterId, c.maxValue, newStartValue)}
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
