import React, { useState } from 'react'
import AnswerResult from '../AnswerResult/AnswerResult'

const Answers = ({  incorrectAnswers, 
                    correctAnswer, 
                    type, 
                    nextQuestion, 
                    numCorrectAnswers, 
                    setNumCorrectAnswers, 
                    chosenAnswer,
                    setChosenAnswer
            }) => {

    const answers = ['1', '2', '3', '4']
    const [isAnswerCorrect, setIsAnswerCorrect] = useState('unanswered')
    

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

    if (incorrectAnswers.length) {
        for (let i = 0; i < incorrectAnswers.length; i++) {
            incorrectAnswers[i] = incorrectAnswers[i].replace(/&quot;/g,'"')
            incorrectAnswers[i] = incorrectAnswers[i].replace(/&#039;/g,"'")
            incorrectAnswers[i] = incorrectAnswers[i].replace(/&eacute;/g,"é")
            incorrectAnswers[i] = incorrectAnswers[i].replace(/&Aacute;/g,"Á")
            incorrectAnswers[i] = incorrectAnswers[i].replace(/&amp;/g,"&")
            incorrectAnswers[i] = incorrectAnswers[i].replace(/&rsquo;/g,"'")
            incorrectAnswers[i] = incorrectAnswers[i].replace(/&lsquo;/g,"'")
        }
    }

    if (correctAnswer.length) {
        correctAnswer = correctAnswer.replace(/&quot;/g,'"')
        correctAnswer = correctAnswer.replace(/&#039;/g,"'")
        correctAnswer = correctAnswer.replace(/&eacute;/g,"é")
        correctAnswer = correctAnswer.replace(/&Aacute;/g,"Á")
        correctAnswer = correctAnswer.replace(/&amp;/g,"&")
        correctAnswer = correctAnswer.replace(/&rsquo;/g,"'")
        correctAnswer = correctAnswer.replace(/&lsquo;/g,"'")
        
    }

    const checkAnswer = e => {
        if (chosenAnswer.length > 0) return

        if (e.target.textContent === correctAnswer) {
            setNumCorrectAnswers(numCorrectAnswers + 1)
            setIsAnswerCorrect(true)
        } else {
            setIsAnswerCorrect(false)
        }
        setChosenAnswer(e.target.textContent)
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
            <article className="answerResult-container">
            {
                isAnswerCorrect !== 'unanswered' &&
                <AnswerResult isAnswerCorrect={isAnswerCorrect} 
                                nextQuestion={nextQuestion} 
                                setIsAnswerCorrect={setIsAnswerCorrect}
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

