/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import Select from './Select'

describe('Select - UI', () => {
  it('List items', () => {
    const inputName = 'emission'
    const register = jest.fn()
    const options = [
      { label: 'Test 1', value: 'test1' },
      { label: 'Test 2', value: 'test2' }
    ]
    const { getByText } = render(
      <Select label={ inputName } name={ inputName } options={ options } register={ register } />
    )
    const option = getByText('Test 1')

    expect(option.value).toBe('test1')
  })
})
