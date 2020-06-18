import React from 'react'
import { shallow, render } from 'enzyme'
import Quiz from './Quiz'

describe("Quiz.js", () => {
    it('checks if it Quiz.js renders properly', () => {
        expect(render(<Quiz numQuestions={8} />)).toMatchSnapshot()
    })
})


