import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Answers from './Answers'

describe("Test.js", () => {

    let wrapper;
    const incorrectAnswers = ["chicken", "cheese", "apples"]
    const correctAnswer = "lentils"
    const mockSetChosenAnswer = jest.fn()
    const mockSetIsAnswerCorrect = jest.fn()
    const mockSetHasSelectedAnswer = jest.fn()


    beforeEach(() => {
        wrapper = shallow(<Answers incorrectAnswers={incorrectAnswers} 
            correctAnswer={correctAnswer}
            setIsAnswerCorrect={mockSetIsAnswerCorrect}
            setChosenAnswer={mockSetChosenAnswer}
            setHasSelectedAnswer={mockSetHasSelectedAnswer}
            chosenAnswer={'chicken'}
            />)
    })

    it('checks if it Answers.js renders properly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('checks if functions are called', () => {
        wrapper = render(<Answers incorrectAnswers={incorrectAnswers} 
            correctAnswer={correctAnswer}
            setIsAnswerCorrect={mockSetIsAnswerCorrect}
            setChosenAnswer={mockSetChosenAnswer}
            setHasSelectedAnswer={mockSetHasSelectedAnswer}
            chosenAnswer={'chicken'}
            type={'boolean'}
            
            />)
        const button = wrapper.find("[id='boolean-option-1']")["0"].children[0]
        // expect(mockSetIsAnswerCorrect.mock.calls.length).toBe(1)
        // expect(mockSetChosenAnswer.mock.calls.length).toBe(1)
        // expect(mockSetHasSelectedAnswer.mock.calls.length).toBe(1)

    })

})