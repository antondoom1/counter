import React, {useState} from 'react'
import './App.css'
import {Counter} from './components/Counter'
import {Button} from './components/Button'

function App() {
  const minValue = 0
  const maxValue = 5

  let [number, setNumber] = useState(minValue)

  const incrementHandler = () => number < maxValue && setNumber(number + 1)
  const resetHandler = () => setNumber(minValue)

  return (
    <div className="app">

      <div className={'wrapper'}>

        <Button
          name={'inc'}
          buttonClassName={'incrementButton'}
          disabled={number === maxValue}
          callBack={incrementHandler}/>

        <Counter
          number={number}
          maxValue={maxValue}/>

        <Button
          name={'reset'}
          buttonClassName={'resetButton'}
          disabled={!number}
          callBack={resetHandler}/>

      </div>

    </div>
  )
}

export default App
