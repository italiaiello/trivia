import React from 'react'
import { shallow, render } from 'enzyme'
import QuizFinished from './QuizFinished'

describe("Test.js", () => {

    let wrapper;

    // beforeEach(() => {
    //     wrapper = shallow(<QuizFinished numCorrectAnswers={10} numQuestions={30} />)
    // })

    it('checks if it QuizFinished.js renders properly', () => {
        wrapper = shallow(<QuizFinished numCorrectAnswers={10} numQuestions={30} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('checks if failed score renders correct text', () => {
        wrapper = render(<QuizFinished numCorrectAnswers={10} numQuestions={30} />)
        const text = wrapper.find('[id="failedText"]')["0"]["children"][0]["data"].trim()
        expect(text).toEqual("Better luck next time")
    })

    it('checks if passed score renders correct text', () => {
        wrapper = render(<QuizFinished numCorrectAnswers={10} numQuestions={20} />)
        const text = wrapper.find('[id="passedText"]')["0"]["children"][0]["data"].trim()
        expect(text).toEqual("Congrats, you passed!")
    })

    it('checks if passed score renders correct text', () => {
        wrapper = render(<QuizFinished numCorrectAnswers={75} numQuestions={100} />)
        const text = wrapper.find('[id="wellDoneText"]')["0"]["children"][0]["data"].trim()
        expect(text).toEqual("Well done!")
    })

    it('checks if passed score renders correct text', () => {
        wrapper = render(<QuizFinished numCorrectAnswers={10} numQuestions={10} />)
        const text = wrapper.find('[id="acedItText"]')["0"]["children"][0]["data"].trim()
        expect(text).toEqual("Wow! You aced it!")
    })

})