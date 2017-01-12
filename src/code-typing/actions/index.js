import actionType, {SERVER_URL} from 'code-typing/constants'

const createAction = (type, payload) =>  ({
  type: type,
  payload: payload
})


export const loadCode = () => {
  return (dispatch) => {
    dispatch(createAction(actionType.LOAD_CODE_REQUEST))
    fetch(`/api/code-typing/code`)
      .then(response => {
        response.text()
          .then(code => {
            dispatch(createAction(actionType.LOAD_CODE_SUCCESS, code))
          })

      })
      .catch(error => {
        dispatch(createAction(actionType.LOAD_CODE_ERROR, error))
      })
  }
}
