import React from 'react'
import Emoji from '../Emoji/Emoji'

const QuizFinished = ({ numQuestions, numCorrectAnswers, resetQuiz }) => {

    const score = Math.round((numCorrectAnswers / numQuestions) * 100)

    return (
        <article className="quizFinished">
            <h3>{`You scored ${numCorrectAnswers}/${numQuestions}`}</h3>
            {
                score < 50 ?
                <p id="failedText">Better luck next time <Emoji symbol="&#128577;" label="happy smiley" /></p>
                :
                (
                    score >= 50 && score < 70 ?
                    <p id="passedText">Congrats, you passed! <Emoji symbol="&#128522;" label="happy smiley" /></p>
                    :
                    (
                        score >= 70 && score < 85 ?
                        <p id="wellDoneText">Well done! <Emoji symbol="&#128512;" label="happy smiley" /></p>
                        :
                        <p id="acedItText">Wow! You aced it! <Emoji symbol="&#129299;" label="nerd smiley" /></p>
                    )
                )
            }
            <button className="restartButton" onClick={resetQuiz}>Start another quiz</button>
        </article>
    )
}

export default QuizFinished