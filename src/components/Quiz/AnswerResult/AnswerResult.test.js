import React from 'react'
import { shallow } from 'enzyme'
import AnswerResult from './AnswerResult'

it('checks if it AnswerResult.js renders properly', () => {

    expect(shallow(<AnswerResult />)).toMatchSnapshot()
})