import {combineReducers, createStore} from 'redux'
import {countersReducer, resetNumberAC} from './counters-reducer'
import {loadState, saveState} from '../utils/local-storage-utils'

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  counters: countersReducer
})

export const store = createStore(rootReducer, loadState())

store.dispatch(resetNumberAC(1))
store.dispatch(resetNumberAC(2))

store.subscribe(() => {
  saveState({
    counters: store.getState().counters
  })
})
