import { createStore } from 'redux'
import { reducer } from './reducers/reducer'

export let store = createStore(reducer)
