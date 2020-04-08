import React from 'react'
import CorrectIcon from '../../images/correct.svg'
import WrongIcon from '../../images/wrong.svg'

const AnswerResult = ({     isAnswerCorrect, 
                            nextQuestion, 
                            setIsAnswerCorrect, 
                            chosenAnswer, 
                            correctAnswer 
                }) => {

    const goToNextQuestion = (e) => {
        nextQuestion()
        setIsAnswerCorrect('unanswered')
    }

    return (
        <article className={isAnswerCorrect ? "answerResult correct" : "answerResult wrong"}>
            {
                isAnswerCorrect
                ?
                <article className="resultIconContainer">
                    <figure className="resultIcon">
                        <img src={CorrectIcon} alt="Correct answer icon" />
                    </figure>
                    <p>{`${chosenAnswer} is correct, well done!`}</p>
                </article>
                :
                <article className="resultIconContainer">
                    <figure className="resultIcon">
                        <img src={WrongIcon} alt="Wrong answer icon" />
                    </figure>
                    <p>{`Sorry, ${chosenAnswer} is incorrect.`}</p>
                    <p>{`The correct answer was ${correctAnswer}`}</p>
                </article>
            }
            <button onClick={goToNextQuestion}>Next Question</button>
        </article>
    )
}

export default AnswerResult