import React from 'react'
import { shallow } from 'enzyme'
import Difficulty from './Difficulty'

it('checks if it Difficulty.js renders properly', () => {
    expect(shallow(<Difficulty />)).toMatchSnapshot()
})