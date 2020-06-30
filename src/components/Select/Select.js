import React from 'react'
import PropTypes from 'prop-types'
import './Select.scss'

const Select = ({ hasError, label, name, options, register, required }) => {
  return (
    <div className="select">
      <select
        id={ name }
        name={ name }
        className={`${hasError ? 'error' : ''} select__component`}
        ref={ register({ required: required })}>
        { options.map(item =>
          (<option data-testid="option" key={item.value} value={item.value}>{item.label}</option>)
        )}
      </select>
      <label
        htmlFor={ name }
        className={`${hasError ? 'error' : ''} select__label`}>
        { label }
      </label>
    </div>
  )
}

Select.propTypes = {
  hasError: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool
}

export default Select
