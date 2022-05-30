export type CounterType = {
  counterId: number
  minValue: number
  maxValue: number
  number: number
}

const initialState: Array<CounterType> = [
  {counterId: 1, minValue: 0, maxValue: 5, number: 0},
  {counterId: 2, minValue: 0, maxValue: 5, number: 0}
]

export const countersReducer = (state: Array<CounterType> = initialState, action: countersReducerActionsType): Array<CounterType> => {
  switch (action.type) {
    case 'INCREMENT-NUMBER':
      return state.map(s => s.counterId === action.payload.counterId ? {...s, number: s.number + 1} : s)
    case 'RESET-NUMBER':
      return state.map(s => s.counterId === action.payload.counterId ? {...s, number: s.minValue} : s)
    case 'SET-NEW-START-VALUE':
      return state.map(s => s.counterId === action.payload.counterId
        ? {...s, minValue: action.payload.newStartValue} : s)
    case 'SET-NEW-MAX-VALUE':
      return state.map(s => s.counterId === action.payload.counterId
        ? {...s, maxValue: action.payload.newMaxValue} : s)
    default:
      return state
  }
}

type countersReducerActionsType = incrementNumberACType
  | resetNumberACType
  | setNewStartValueACType
  | setNewMaxValueACType

type incrementNumberACType = ReturnType<typeof incrementNumberAC>
export const incrementNumberAC = (counterId: number) => {
  return {
    type: 'INCREMENT-NUMBER',
    payload: {counterId}
  } as const
}

type resetNumberACType = ReturnType<typeof resetNumberAC>
export const resetNumberAC = (counterId: number) => {
  return {
    type: 'RESET-NUMBER',
    payload: {counterId}
  } as const
}

type setNewStartValueACType = ReturnType<typeof setNewStartValueAC>
export const setNewStartValueAC = (counterId: number, newStartValue: number) => ({
  type: 'SET-NEW-START-VALUE',
  payload: {counterId, newStartValue}
} as const)

type setNewMaxValueACType = ReturnType<typeof setNewMaxValueAC>
export const setNewMaxValueAC = (counterId: number, newMaxValue: number) => {
  return {
    type: 'SET-NEW-MAX-VALUE',
    payload: {counterId, newMaxValue}
  } as const
}