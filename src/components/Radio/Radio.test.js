/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Radio from './Radio'

describe('Radio - UI', () => {
  it('calls "onChange" prop on radio change', () => {
    const inputName = 'gender'
    const onChange = jest.fn()
    const register = jest.fn()
    const { getByTestId } = render(
      <Radio label={ inputName } name={ inputName } value='M' onChange={ onChange } register={ register } />
    )
    const radio = getByTestId('M')

    fireEvent.click(radio)

    expect(onChange).toHaveBeenCalled()
  })

  it('check if radio is checked properly', () => {
    const inputName = 'gender'
    const onChange = jest.fn()
    const register = jest.fn()
    const { getByLabelText } = render(
      <>
        <Radio label='Masculino' name={ inputName } value='M' onChange={ onChange } register={ register } />
        <Radio label='Feminino' name={ inputName } value='F' onChange={ onChange } register={ register } />
      </>
    )
    const radio = getByLabelText('Feminino')

    fireEvent.change(radio, { target: { value: 'M' } })

    expect(radio.value).toBe('M')
  })
})
