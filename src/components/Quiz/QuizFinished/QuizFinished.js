import React from 'react'
import Emoji from '../Emoji/Emoji'

const QuizFinished = ({ numQuestions, numCorrectAnswers, resetQuiz }) => {

    const score = Math.round((numCorrectAnswers / numQuestions) * 100)

    return (
        <article>
            <h3>{`You scored ${numCorrectAnswers}/${numQuestions}`}</h3>
            {
                score < 50 ?
                <p>Better luck next time <Emoji symbol="&#128577;" label="happy smiley" /></p>
                :
                (
                    score >= 50 && score < 70 ?
                    <p>Congrats, you passed! <Emoji symbol="&#128522;" label="happy smiley" /></p>
                    :
                    (
                        score >= 70 && score < 85 ?
                        <p>Well done! <Emoji symbol="&#128512;" label="happy smiley" /></p>
                        :
                        <p>Wow! You aced it! <Emoji symbol="&#129299;" label="nerd smiley" /></p>
                    )
                )
            }
            <button className="restartButton" onClick={resetQuiz}>Start Again</button>
        </article>
    )
}

export default QuizFinished