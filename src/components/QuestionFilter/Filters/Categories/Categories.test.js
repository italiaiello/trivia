import React from 'react'
import { shallow } from 'enzyme'
import Categories from './Categories'

it('checks if it Categories.js renders properly', () => {

    expect(shallow(<Categories />)).toMatchSnapshot()
})