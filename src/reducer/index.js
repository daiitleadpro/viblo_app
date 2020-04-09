import {combineReducers} from 'redux'
import taskReducer from './taskreducer'
const allReducer = combineReducers({
    taskReducer
})
export default allReducer