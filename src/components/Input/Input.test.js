/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Input from './Input'

describe('Input - Component', () => {
  it('calls "onBlur" prop on input blur', () => {
    const inputName = 'test'
    const onBlur = jest.fn()
    const register = jest.fn()
    const { getByTestId } = render(
      <Input label={ inputName } name={ inputName } onBlur={ onBlur } register={ register } />
    )
    const input = getByTestId(inputName)

    fireEvent.blur(input, { target: { value: 'Test' } })

    expect(onBlur).toHaveBeenCalled()
  })

  it('renders mask', () => {
    const inputName = 'test'
    const mask = '00/00/0000'
    const value = '25/04/1994'
    const register = jest.fn()
    const { getByTestId } = render(
      <Input label={ inputName } name={ inputName } mask={ mask } register={ register } />
    )
    const input = getByTestId(inputName)

    fireEvent.change(input, { target: { value } })

    expect(input.value).toEqual('25/04/1994')
  })
})
