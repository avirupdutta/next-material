import { combineReducers } from 'redux'
import authReducer from './authReducer'
import themeReducer from './themeReducer'

// COMBINED REDUCERS
const reducers = {
    auth: authReducer,
    theme: themeReducer
}

export default combineReducers(reducers)