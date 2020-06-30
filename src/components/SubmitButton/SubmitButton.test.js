/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SubmitButton from './SubmitButton'

describe('SubmitButton - Component', () => {
  it('calls "onChange" prop on radio change', () => {
    const inputName = 'submit'
    const onClick = jest.fn()
    const { getByTestId } = render(
      <SubmitButton label={ inputName } name={ inputName } onClick={ onClick } />
    )
    const button = getByTestId(inputName)

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })
})
