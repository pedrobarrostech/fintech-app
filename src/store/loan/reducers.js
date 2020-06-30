import * as type from './types'

const INITIAL_STATE = {
  loans: [],
  message: '',
  error: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.LIST_LOAN:
      return {
        ...state,
        loans: action.data
      }
    case type.CREATE_LOAN:
      return {
        ...state,
        message: action.data
      }
    case type.DELETE_LOAN:
      var loansFiltered = state.loans.filter(i => i.id !== action.data.id)
      return {
        ...state,
        loans: loansFiltered,
        message: action.data
      }
    case type.CLEAN_MESSAGES_LOAN:
      return {
        ...state,
        message: '',
        error: {}
      }
    case type.FAIL_LOAN:
      return {
        ...state,
        loans: [],
        error: action.error
      }
    default:
      return state
  }
}
