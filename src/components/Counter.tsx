import React from 'react'
import s from './Counter.module.css'

type CounterType = {
  number: number
  maxValue: number
}

export const Counter: React.FC<CounterType> = ({number, maxValue}) => {

  const counterClassName = `${s.counter} ${number === maxValue ? s.counterDone : ''}`

  return <div className={counterClassName}>{number}</div>

}

