/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import ToastMessage from './ToastMessage'

describe('Toast Message - UI', () => {
  it('List items', () => {
    const message = 'Success'
    const onClick = jest.fn()
    const { getByTestId } = render(
      <ToastMessage message={ message } onClick={ onClick } />
    )
    const toast = getByTestId('toast-message')
    const toastTitle = toast.querySelector('.toast-message__title').textContent

    expect(toastTitle).toEqual(message)
  })
})
