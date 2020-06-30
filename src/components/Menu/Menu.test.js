/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import Menu from './Menu'

describe('Menu - Component', () => {
  it('should have menu items', () => {
    const { getByTestId } = render(<Menu />)
    const menu = getByTestId('menu')
    const items = menu.querySelector('.menu__item')
    expect(items).not.toBe(false)
  })
})
