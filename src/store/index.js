import { createStore, combineReducers } from 'redux'
import dispatchers from './dispatcher/reducers'
import loan from './loan/reducers'

const store = createStore(
  combineReducers({
    loan,
    dispatchers
  })
)

export default store
