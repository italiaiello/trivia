import React from 'react'
import { shallow } from 'enzyme'
import Type from './Type'

it('checks if it Type.js renders properly', () => {

    expect(shallow(<Type />)).toMatchSnapshot()
})