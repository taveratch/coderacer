import actionType, {SERVER_URL} from 'code-typing/constant'

const createAction = (type, payload) =>  ({
  type: type,
  payload: payload
})


export const loadCode = () => {
  return (dispatch) => {
    dispatch(createAction(actionType.LOAD_CODE_REQUEST))
    fetch(`${SERVER_URL}/code`)
      .then(code => {
        dispatch(createAction(actionType.LOAD_CDOE_SUCCESS, code))
      })
      .catch(error => {
        dispatch(createAction(actionType.LOAD_CODE_ERROR, error))
      })
  }
}
