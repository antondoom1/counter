import React, {useState} from 'react'
import s from './CounterV2.module.css'
import {Button} from '../../universal-components/universal-button/Button'
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

export const CounterV2 = () => {

  const dispatch = useDispatch()
  const counterV2 = useSelector<AppRootStateType, CounterType>(state => state.counters[1])
  const [showCounter, setShowCounter] = useState<boolean>(true)

  const incrementNumber = () => {
    dispatch(incrementNumberAC(counterV2.counterId))
  }
  const resetNumber = () => {
    dispatch(resetNumberAC(counterV2.counterId))
  }
  const setNewStartValue = (newStartValue: number) => {
    dispatch(setNewStartValueAC(counterV2.counterId, newStartValue))
  }
  const setNewMaxValue = (newMaxValue: number) => {
    dispatch(setNewMaxValueAC(counterV2.counterId, newMaxValue))
  }
  const setValues = () => {
    if (counterV2.minValue < counterV2.maxValue && counterV2.minValue >= 0) {
      dispatch(resetNumberAC(counterV2.counterId))
      setShowCounter(!showCounter)
    }
  }
  const showSettingsBlock = () => {
    setShowCounter(!showCounter)
  }

  const disableSetValuesButton = counterV2.maxValue < 0 || counterV2.minValue < 0 || counterV2.maxValue <= counterV2.minValue || counterV2.maxValue >= 10000

  return (

    <div className={s.counterWrapper}>

      {
        showCounter
          ?
          <div className={s.displayWrapper}>
            <CounterUI
              number={counterV2.number}
              startValue={counterV2.minValue}
              maxValue={counterV2.maxValue}
              incrementHandler={incrementNumber}
              resetHandler={resetNumber}/>
            <Button name={'set'} buttonClassName={s.setButton} callBack={showSettingsBlock}/>
          </div>

          :
          <div>
            <CounterSettings
              startValue={counterV2.minValue}
              maxValue={counterV2.maxValue}
              disableSetValuesButton={disableSetValuesButton}
              setValuesHandler={setValues}
              setStartValueCallback={setNewStartValue}
              setMaxValueCallback={setNewMaxValue}/>
          </div>
      }

    </div>
  )
}
