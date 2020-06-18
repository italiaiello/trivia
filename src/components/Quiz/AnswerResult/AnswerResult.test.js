import React from 'react'
import { shallow, render } from 'enzyme'
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

    it('checks if correct answer text is rendered correctly', () => {
        wrapper = render(<AnswerResult 
                            nextQuestion={mockNextQuestion} 
                            setHasSelectedAnswer={mockSetHasSelectedAnswer}
                            setIsAnswerCorrect={mockSetIsAnswerCorrect}
                            isAnswerCorrect={true}
                            type={"multiple"}
                            chosenAnswer={"Chicken"}
                        />)

        expect(wrapper.find("[id='multipleCorrectText']")._root["0"].children[0].children[1].children[0].data).toBe('Chicken is correct, well done!')

        wrapper = render(<AnswerResult 
            nextQuestion={mockNextQuestion} 
            setHasSelectedAnswer={mockSetHasSelectedAnswer}
            setIsAnswerCorrect={mockSetIsAnswerCorrect}
            isAnswerCorrect={false}
            type={"multiple"}
            chosenAnswer={"Chicken"}
        />)

        wrapper = render(<AnswerResult 
            nextQuestion={mockNextQuestion} 
            setHasSelectedAnswer={mockSetHasSelectedAnswer}
            setIsAnswerCorrect={mockSetIsAnswerCorrect}
            isAnswerCorrect={true}
            chosenAnswer={"Chicken"}
        />)

        expect(wrapper.find("[id='correctText']")._root["0"].children[0].children[1].children[0].data).toBe("That's correct, well done!")

        

    })
})


