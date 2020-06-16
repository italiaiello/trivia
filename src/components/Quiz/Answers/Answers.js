import React, { useState } from 'react'
import AnswerResult from '../AnswerResult/AnswerResult'

const Answers = ({  incorrectAnswers, 
                    correctAnswer, 
                    type, 
                    nextQuestion, 
                    numCorrectAnswers, 
                    setNumCorrectAnswers, 
                    chosenAnswer,
                    setChosenAnswer,
                    currentAnswerOrder,
                    setCurrentAnswerOrder
            }) => {

    let answers = ['1', '2', '3', '4']
    const [isAnswerCorrect, setIsAnswerCorrect] = useState('unanswered')
    const [hasSelectedAnswer, setHasSelectedAnswer] = useState(false)
    

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    if (type === 'multiple') {
        if (hasSelectedAnswer) {
            answers = [...currentAnswerOrder]
        } else {
            const randomIndex = getRandomInt(4)
            answers[randomIndex] = unescape(correctAnswer)

            let incorrectAnswerIndex = 0;
            let tempCorrectAnswer = unescape(correctAnswer)
            for (let i = 0; i < answers.length; i++) {
                if (answers[i] !== correctAnswer && answers[i] !== tempCorrectAnswer) {
                    answers[i] = unescape(incorrectAnswers[incorrectAnswerIndex])
                    incorrectAnswerIndex++
                }
            }
        }
    }

    if (incorrectAnswers.length) {
        for (let i = 0; i < incorrectAnswers.length; i++) {
            incorrectAnswers[i] = unescape(incorrectAnswers[i])
        }
    }

    if (correctAnswer.length) {
        correctAnswer = unescape(correctAnswer)
    }

    const checkAnswer = e => {
        if (chosenAnswer.length > 0) return

        if (e.target.textContent === correctAnswer) {
            setNumCorrectAnswers(numCorrectAnswers + 1)
            setIsAnswerCorrect(true)
        } else {
            setIsAnswerCorrect(false)
        }
        setHasSelectedAnswer(true)
        setChosenAnswer(e.target.textContent)
        setCurrentAnswerOrder(answers.slice())
    }

    return (
        <article className="answers">
            <article className="optionsContainer">
                {
                    type === 'boolean' ?
                    <article className="boolean-option-container">
                        <button id="boolean-option-1" className="boolean-option" onClick={checkAnswer}>True</button>
                        <button className="boolean-option" onClick={checkAnswer}>False</button>
                    </article>
                    :
                    (
                        answers.map((answer, i) => {
                            return (
                                    <button key={i} 
                                            id={`testButton${i}`}
                                            className={
                                                answer.length < 50 
                                                    ? "multiple-option" 
                                                    : "multiple-option largeAnswer largeAnswerMobile"
                                            }
                                            onClick={checkAnswer}
                                    >
                                    {answer}
                                    </button>
                                    
                                    
                                    
                            )
                        })
                    )
                }
            </article>
            <article className="answerResult-container">
            {
                isAnswerCorrect !== 'unanswered' &&
                <AnswerResult isAnswerCorrect={isAnswerCorrect} 
                                nextQuestion={nextQuestion} 
                                setIsAnswerCorrect={setIsAnswerCorrect}
                                setHasSelectedAnswer={setHasSelectedAnswer}
                                chosenAnswer={chosenAnswer}
                                correctAnswer={correctAnswer}
                                type={type}
                />
            }
            </article>
        </article>
    )
}

export default Answers

