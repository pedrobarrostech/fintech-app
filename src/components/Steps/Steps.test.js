/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import Steps from './Steps'

describe('Steps - Component', () => {
  it('should have menu items', () => {
    const { getByTestId } = render(<Steps />)
    const step = getByTestId('step')
    const items = step.querySelector('.step__item')

    expect(items).not.toBe(false)
  })
})
