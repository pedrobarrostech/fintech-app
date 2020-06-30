import * as type from './types'

const INITIAL_STATE = {
  dispatchers: [],
  errorMessage: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.GET_DISPATCHERS:
      return {
        ...state,
        dispatchers: action.data.orgao_emissor
      }
    case type.GET_DISPATCHERS_FAIL:
      return {
        ...state,
        dispatchers: [],
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}
