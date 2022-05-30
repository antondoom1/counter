import {
  countersReducer,
  incrementNumberAC,
  resetNumberAC,
  setNewStartValueAC, setNewMaxValueAC, CounterType
} from './counters-reducer'

test('the number should be incremented', () => {
  const startState: Array<CounterType> = [
    {counterId: 1, minValue: 0, maxValue: 5, number: 0},
    {counterId: 2, minValue: 0, maxValue: 5, number: 0}
  ]

  const endState: Array<CounterType> = countersReducer(startState, incrementNumberAC(1))

  expect(endState[0].number).toBe(1)
  expect(endState[1].number).toBe(0)

})
test('the number should be equal minvalue after reset', () => {
  const startState: Array<CounterType> = [
    {counterId: 1, minValue: 0, maxValue: 5, number: 4},
    {counterId: 2, minValue: 0, maxValue: 5, number: 10}
  ]

  const endState: Array<CounterType> = countersReducer(startState, resetNumberAC(2))

  expect(endState[0].minValue).not.toEqual(endState[0].number)
  expect(endState[1].minValue).toEqual(endState[1].number)

})
test('the new min value enter on the state', () => {
  const startState: Array<CounterType> = [
    {counterId: 1, minValue: 1, maxValue: 0, number: 0},
    {counterId: 2, minValue: 1, maxValue: 0, number: 0}
  ]

  const endState: Array<CounterType> = countersReducer(startState, setNewStartValueAC(2, 7))

  expect(endState[0].minValue).toBe(1)
  expect(endState[1].minValue).toBe(7)

})
test('the new max value enter on the state', () => {
  const startState: Array<CounterType> = [
    {counterId: 1, minValue: 1, maxValue: 3, number: 0},
    {counterId: 2, minValue: 1, maxValue: 3, number: 0}
  ]

  const endState: Array<CounterType> = countersReducer(startState, setNewMaxValueAC(1, 7))

  expect(endState[1].maxValue).toBe(3)
  expect(endState[0].maxValue).toBe(7)

})