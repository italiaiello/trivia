import React from 'react'
import { shallow } from 'enzyme'
import AnswerResult from './AnswerResult'


const mockNextQuestion = jest.fn()
const mockSetIsAnswerCorrect = jest.fn()
const mockSetHasSelectedAnswer = jest.fn()

describe("AnswerResult.js", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AnswerResult nextQuestion={mockNextQuestion} 
                                        setHasSelectedAnswer={mockSetHasSelectedAnswer}
                                        setIsAnswerCorrect={mockSetIsAnswerCorrect}
                                            />)
      })
    
    it('checks if it AnswerResult.js renders properly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    
    
    it("tests if methods are called correctly", () => {
        const button = wrapper.find('[id="goToNextQuestion"]')
        button.simulate('click')
        expect(mockNextQuestion.mock.calls.length).toBe(1)
        expect(mockSetIsAnswerCorrect.mock.calls.length).toBe(1)
        expect(mockSetHasSelectedAnswer.mock.calls.length).toBe(1)
    })
})


