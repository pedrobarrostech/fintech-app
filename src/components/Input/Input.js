import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import IMask from 'imask'
import './Input.scss'

const Input = ({ inputType = 'text', hasError, label, onBlur, mask, name, placeholder, register, value, validations }) => {
  useEffect(() => {
    if (mask && name) {
      const element = document.getElementById(name)
      IMask(element, {
        mask
      })
    }
  }, [mask, name])

  return (
    <div className="input">
      <input
        type={ inputType }
        data-testid={ name }
        id={ name}
        name={ name }
        className={`${hasError ? 'error' : ''} input__component`}
        onBlur={ onBlur }
        placeholder={ placeholder }
        value={ value }
        ref={ register({ ...validations })}
      />
      <label
        htmlFor={ name }
        className={`${hasError ? 'error' : ''} input__label`}>
        { label }
      </label>
    </div>
  )
}

Input.propTypes = {
  inputType: PropTypes.string,
  hasError: PropTypes.object,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  mask: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  value: PropTypes.string,
  validations: PropTypes.object
}

export default Input
