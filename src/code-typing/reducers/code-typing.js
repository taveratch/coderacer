import actionType from 'code-typing/constants'
import _ from 'lodash'

let initialState = {
  code: '',
  currentRow: 0,
  currentCol: 0,
  status: 'untyped'
}
let codeArray;

export default (state = initialState, action) => {
  let newState = _.merge({}, state)
  switch(action.type) {
    case actionType.LOAD_CODE_SUCCESS:
      newState.code = action.payload
      codeArray = action.payload.split('\n')
      return newState
    case actionType.TYPING:
      if(isCorrectChar(action.payload, newState)) {
        if(codeArray[newState.currentRow].length-1 === newState.currentCol) {
          newState["currentRow"] = newState.currentRow + 1
          newState['currentCol'] = 0
        }else {
          newState['currentCol'] = newState.currentCol + 1
        }
        newState['status'] = 'untyped'
      }else {
        newState['status'] = 'wrong'
      }
      return newState
    default:
      return state
  }
}

const isCorrectChar = (char, state) => {
  return codeArray[state.currentRow][state.currentCol] === char
}
