import React from 'react'
import { shallow } from 'enzyme'
import Type from './Type'

describe("Test.js", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Type />)
    })

    it('checks if it Type.js renders properly', () => {
        expect(wrapper).toMatchSnapshot()
    })

})


