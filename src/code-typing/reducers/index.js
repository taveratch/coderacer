import {combineReducers} from 'redux'
import codeTyping from './code-typing'
import {routerReducer} from 'react-router-redux'

export default combineReducers({codeTyping, routing: routerReducer})
