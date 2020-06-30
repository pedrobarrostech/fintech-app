
import * as type from './types'
import axios from 'axios'
import Config from '../../utils/config'

export const getDispatchers = async (dispatch) => {
  try {
    const response = await axios.get(`${Config.API_URL}dispatchers`)
    dispatch(success(response.data))
  } catch (error) {
    dispatch(failed(error))
  }
}

function success (data) {
  return {
    type: type.GET_DISPATCHERS,
    data
  }
}

function failed (error) {
  return {
    type: type.GET_DISPATCHERS_FAIL,
    error
  }
}
