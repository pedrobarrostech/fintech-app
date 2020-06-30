/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

describe('Header - Component', () => {
  it('should have header items', () => {
    const { getByTestId } = render(<Header />)
    const header = getByTestId('header')
    const items = header.querySelector('.header__item')
    expect(items).not.toBe(false)
  })
})
