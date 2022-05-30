import React from 'react'
import './App.css'
import {CounterV1} from './components/counters/counter-v1/CounterV1'
import {CounterV2} from './components/counters/counter-v2/CounterV2'

function App() {
  return (
    <div className="app">

      Counter version 1:
      <CounterV1/>

      <hr/>

      Counter version 2:
      <CounterV2/>

    </div>
  )
}

export default App
