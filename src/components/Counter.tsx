import React from 'react'
import s from './Counter.module.css'

type CounterType = {
  number: number
  maxValue: number
}

export const Counter: React.FC<CounterType> = ({number, maxValue}) => {

  const counterClassName = `${s.counter} ${number >= maxValue || number < 0 || maxValue <= 0 || maxValue >= 10000 ? s.counterDone : ''}`

  return <div className={counterClassName}>{number}</div>

}

