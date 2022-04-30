import React from 'react'
import s from './CounterUI.module.css'
import {Button} from '../../components/Button'
import {Counter} from '../../components/Counter'

type CounterUIType = {
  number: number
  maxValue: number
  incrementHandler: () => void
  resetHandler: () => void
}

export const CounterUI: React.FC<CounterUIType> = ({number, maxValue, incrementHandler, resetHandler}) => {
  return (
    <div className={s.counterBlock}>

      <Button
        name={'inc'}
        buttonClassName={s.incrementButton}
        disabled={number === maxValue}
        callBack={incrementHandler}/>

      <Counter
        number={number}
        maxValue={maxValue}/>

      <Button
        name={'reset'}
        buttonClassName={s.resetButton}
        disabled={!number}
        callBack={resetHandler}/>

    </div>
  )
}
