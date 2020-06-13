import React from 'react'
import { shallow } from 'enzyme'
import Quiz from './Quiz'

describe("Quiz.js", () => {
    it('checks if it Quiz.js renders properly', () => {
        expect(shallow(<Quiz/>)).toMatchSnapshot()
    })
})


