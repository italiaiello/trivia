import React from 'react'
import CorrectIcon from '../../../images/correct.svg'
import WrongIcon from '../../../images/wrong.svg'

const AnswerResult = ({     isAnswerCorrect, 
                            nextQuestion, 
                            setIsAnswerCorrect,
                            setHasSelectedAnswer, 
                            chosenAnswer, 
                            correctAnswer,
                            type,
                }) => {

    const goToNextQuestion = () => {
        nextQuestion()
        setIsAnswerCorrect('unanswered')
        setHasSelectedAnswer(false)
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
                    {
                        type === 'multiple' ?
                        <p id="multipleCorrectText">{`${chosenAnswer} is correct, well done!`}</p>
                        :
                        <p id="correctText">{`That's correct, well done!`}</p>
                    }
                    
                </article>
                :
                <article className="resultIconContainer">
                    <figure className="resultIcon">
                        <img src={WrongIcon} alt="Wrong answer icon" />
                    </figure>
                    {
                        type === 'multiple' ?
                        <article id="wrongResultContainer" className="wrongResultContainer">
                            <p>{`Sorry, ${chosenAnswer} is incorrect.`}</p>
                            <p>{`The correct answer was ${correctAnswer}`}</p>
                        </article>
                        :
                        <p id="incorrectText">{`Sorry, that's incorrect.`}</p>
                    }
                </article>
            }
            <button id="goToNextQuestion" onClick={goToNextQuestion}>Next Question</button>
        </article>
    )
}

export default AnswerResult