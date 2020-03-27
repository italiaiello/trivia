import React, { useState } from 'react'
import AnswerResult from './AnswerResult'

const Answers = ({ incorrectAnswers, correctAnswer, type, nextQuestion }) => {

    const answers = ['1', '2', '3', '4']

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    if (type === 'multiple') {
        const randomIndex = getRandomInt(4)
        answers[randomIndex] = correctAnswer
        let incorrectIndex = 0;
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] !== correctAnswer) {
                answers[i] = incorrectAnswers[incorrectIndex]
                incorrectIndex++
            }
        }
    }

    const [isAnswerCorrect, setIsAnswerCorrect] = useState('unanswered')

    const checkAnswer = e => {
        if (e.target.textContent === correctAnswer) {
            setIsAnswerCorrect(true)
        } else {
            setIsAnswerCorrect(false)
        }
    }

    return(
        <article>
            {
                type === 'boolean' ?
                <article>
                    <button onClick={checkAnswer}>True</button>
                    <button onClick={checkAnswer}>False</button>
                </article>
                :
                (
                    answers.map((answer, i) => {
                        return (
                            <article key={i}>
                                <button onClick={checkAnswer}>{answer}</button>
                            </article>
                        )
                    })
                )
            }
            {
                isAnswerCorrect !== 'unanswered' &&
                <AnswerResult isAnswerCorrect ={isAnswerCorrect} 
                                nextQuestion={nextQuestion} 
                                setIsAnswerCorrect={setIsAnswerCorrect}
                />
            }
        </article>
    )
}

export default Answers

