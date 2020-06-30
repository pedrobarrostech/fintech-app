import React from 'react'
import PropTypes from 'prop-types'
import './SubmitButton.scss'

const SubmitButton = ({ disabled, label, name, onClick }) => {
  return (
    <>
      <button
        name={ name }
        id={ name }
        data-testid={ name }
        type='submit'
        onClick={ onClick }
        className={`submit-button ${disabled ? 'disabled' : ''}`}>
        { label }
        <span
          className="submit-button__icon">
          <i className='fas fa-caret-right ml-3'></i>
        </span>
      </button>
    </>
  )
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  required: PropTypes.bool
}

export default SubmitButton
