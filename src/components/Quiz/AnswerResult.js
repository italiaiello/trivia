import React from 'react'
import CorrectIcon from '../../images/correct.svg'
import WrongIcon from '../../images/wrong.svg'

const AnswerResult = ({ isAnswerCorrect, nextQuestion, setIsAnswerCorrect }) => {

    console.log(isAnswerCorrect)

    const goToNextQuestion = () => {
        nextQuestion()
        setIsAnswerCorrect('unanswered')
    }

    return (
        <article className={isAnswerCorrect ? "answerResult correct" : "answerResult wrong"}>
            {
                isAnswerCorrect
                ?
                <article className="resultIconContainer">
                    <p>That's correct!</p>
                    <figure className="resultIcon">
                        <img src={CorrectIcon} alt="Thing" />
                    </figure>
                </article>
                :
                <article className="resultIconContainer">
                    <p>Sorry, wrong answer</p>
                    <figure className="resultIcon">
                        <img src={WrongIcon} alt="Thing" />
                    </figure>
                </article>
            }
            <button onClick={goToNextQuestion}>Next Question</button>
        </article>
    )
}

export default AnswerResult