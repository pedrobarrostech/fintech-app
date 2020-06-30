import React from 'react'
import PropTypes from 'prop-types'
import './Radio.scss'

const Radio = ({ activeItem, hasError, label, onChange, name, register, required, value }) => {
  return (
    <div className="radio">
      <label
        htmlFor={ value }
        className={`radio__label ${activeItem === value ? 'active' : ''} ${hasError ? 'error' : ''}`}
      >
        { label }
      </label>
      <input
        type="radio"
        data-testid={ value }
        id={ value }
        name={ name }
        value={ value }
        className="radio__input"
        ref={ register({ required: required })}
        onChange={ onChange }
      />
    </div>
  )
}

Radio.propTypes = {
  activeItem: PropTypes.string,
  hasError: PropTypes.object,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.string
}

export default Radio
