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

    if (incorrectAnswers.length) {
        for (let i = 0; i < incorrectAnswers.length; i++) {
            incorrectAnswers[i] = incorrectAnswers[i].replace(/&quot;/g,'"')
            incorrectAnswers[i] = incorrectAnswers[i].replace(/&#039;/g,"'")
            incorrectAnswers[i] = incorrectAnswers[i].replace(/&eacute;/g,"é")
            incorrectAnswers[i] = incorrectAnswers[i].replace(/&Aacute;/g,"Á")
        }
    }

    if (correctAnswer.length) {
        correctAnswer = correctAnswer.replace(/&quot;/g,'"')
        correctAnswer = correctAnswer.replace(/&#039;/g,"'")
        correctAnswer = correctAnswer.replace(/&eacute;/g,"é")
        correctAnswer = correctAnswer.replace(/&Aacute;/g,"Á")
        correctAnswer = correctAnswer.replace(/&amp;/g,"&")
    }

    return (
        <article>
            <article className="optionsContainer">
                {
                    type === 'boolean' ?
                    <article className="boolean-option-container">
                        <button className="boolean-option" onClick={checkAnswer}>True</button>
                        <button className="boolean-option" onClick={checkAnswer}>False</button>
                    </article>
                    :
                    (
                        answers.map((answer, i) => {
                            return (
                                    <button key={i} 
                                            className="multiple-option"
                                            onClick={checkAnswer}>{answer}
                                    </button>
                            )
                        })
                    )
                }
            </article>
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

