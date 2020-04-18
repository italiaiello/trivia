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

    const goToNextQuestion = (e) => {
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
                        <p>{`${chosenAnswer} is correct, well done!`}</p>
                        :
                        <p>{`That's correct, well done!`}</p>
                    }
                    
                </article>
                :
                <article className="resultIconContainer">
                    <figure className="resultIcon">
                        <img src={WrongIcon} alt="Wrong answer icon" />
                    </figure>
                    {
                        type === 'multiple' ?
                        <article className="wrongResultContainer">
                            <p>{`Sorry, ${chosenAnswer} is incorrect.`}</p>
                            <p>{`The correct answer was ${correctAnswer}`}</p>
                        </article>
                        :
                        <p>{`Sorry, that's incorrect.`}</p>
                    }
                </article>
            }
            <button onClick={goToNextQuestion}>Next Question</button>
        </article>
    )
}

export default AnswerResult