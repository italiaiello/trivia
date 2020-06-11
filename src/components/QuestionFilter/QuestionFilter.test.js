import React from 'react'
import { shallow } from 'enzyme'
import QuestionFilter from './QuestionFilter'

it('checks if it QuestionFilter.js renders properly', () => {

    expect(shallow(<QuestionFilter />)).toMatchSnapshot()
})