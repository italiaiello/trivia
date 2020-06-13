import React from 'react'
import { shallow } from 'enzyme'
import Emoji from './Emoji'

describe("Emoji.js", () => {
    it('checks if it Emoji.js renders properly', () => {
        expect(shallow(<Emoji/>)).toMatchSnapshot()
    })
})


