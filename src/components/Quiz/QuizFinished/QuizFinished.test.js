import React from 'react'
import { shallow, render } from 'enzyme'
import QuizFinished from './QuizFinished'

describe("Test.js", () => {

    let wrapper;

    // beforeEach(() => {
    //     wrapper = shallow(<QuizFinished numCorrectAnswers={10} numQuestions={30} />)
    // })

    it('checks if it QuizFinished.js renders properly', () => {
        const wrapper = shallow(<QuizFinished numCorrectAnswers={10} numQuestions={30} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('checks if failed score renders correct text', () => {
        const wrapper = render(<QuizFinished numCorrectAnswers={10} numQuestions={30} />)
        const text = wrapper.find('[id="failedText"]')["0"]["children"][0]["data"].trim()
        expect(text).toEqual("Better luck next time")
    })

})