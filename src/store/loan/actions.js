import * as type from './types'
import axios from 'axios'
import Config from '../../utils/config'

export const getLoans = async (dispatch) => {
  try {
    const response = await axios.get(`${Config.API_URL}loan`)
    dispatch(success(type.LIST_LOAN, response.data))
  } catch (error) {
    dispatch(failed(error))
  }
}

export const saveLoan = async (loan, dispatch) => {
  try {
    const response = await axios.post(`${Config.API_URL}loan`, loan)
    dispatch(success(type.CREATE_LOAN, response.data))
  } catch (error) {
    dispatch(failed(error))
  }
}

export const deleteLoan = async (loan, dispatch) => {
  try {
    const response = await axios.delete(`${Config.API_URL}loan/${loan.id}`)
    dispatch(success(type.DELETE_LOAN, response.data))
  } catch (error) {
    dispatch(failed(error))
  }
}

export const clearMessage = (dispatch) => {
  dispatch({ type: type.CLEAN_MESSAGES_LOAN })
}

function success (type, data) {
  return {
    type,
    data
  }
}

function failed (error) {
  return {
    type: type.FAIL_LOAN,
    error
  }
}
