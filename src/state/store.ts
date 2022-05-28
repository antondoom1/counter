import {combineReducers, createStore} from 'redux'
import {countersReducer} from './counters-reducer'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  counters: countersReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
// @ts-ignore
export const persistor = persistStore(store)

