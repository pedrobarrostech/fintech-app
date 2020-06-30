import React from 'react'
import PropTypes from 'prop-types'
import './ToastMessage.scss'

const ToastMessage = ({ onClick, message }) => {
  return (
    <div className="toast-message" data-testid="toast-message">
      <span className="toast-message__title">{ message }</span>
      <button onClick={ onClick } type='button' className='toast-message__close'>
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  )
}

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default ToastMessage
