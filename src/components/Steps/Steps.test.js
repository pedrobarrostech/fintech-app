/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import Steps from './Steps'

describe('Steps - UI', () => {
  it('List items', () => {
    const { getByTestId } = render(<Steps />)
    const step = getByTestId('step')
    const items = step.querySelector('.step__item')

    expect(items).not.toBe(false)
  })
})
