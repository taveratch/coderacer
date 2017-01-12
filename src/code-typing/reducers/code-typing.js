import actionType from 'code-typing/constants'
import _ from 'lodash'

let initialState = {
  code: ''
}

export default (state = initialState, action) => {
  let newState = _.merge({}, state)
  switch(action.type) {
    case actionType.LOAD_CODE_SUCCESS:
      newState.code = action.payload
      return newState
    default:
      return state
  }
}
