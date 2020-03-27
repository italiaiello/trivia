import React from 'react'

const AnswerResult = ({ isAnswerCorrect, nextQuestion, setIsAnswerCorrect }) => {

    console.log(isAnswerCorrect)

    const goToNextQuestion = () => {
        nextQuestion()
        setIsAnswerCorrect('unanswered')
    }

    return (
        <article className={isAnswerCorrect === 'correct' ? "answerResult correct" : "answerResult wrong"}>
            {
                isAnswerCorrect
                ?
                <p>That's correct!</p>
                :
                <p>Sorry, wrong answer</p>
            }
            <button onClick={goToNextQuestion}>Next Question</button>
        </article>
    )
}

export default AnswerResult