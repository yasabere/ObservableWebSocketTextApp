import { combineReducers } from 'redux'
import messages from './Messages/reducer'

const rootReducer = () => combineReducers({
  messages,
})

export default messages