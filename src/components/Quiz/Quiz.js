import React, { useState } from 'react'
import { useDataFetch } from '../../hooks/displayQuestions'
import Answers from './Answers'
import QuizFinished from './QuizFinished'

const Quiz = ({ numQuestions, category, difficulty, type }) => {
    
    const [isLoading, questions] = useDataFetch(`https://opentdb.com/api.php?amount=${numQuestions}${category !== 'Any' ? `&category=${category}` : ""}${difficulty !== 'Any' ? `&difficulty=${difficulty}` : ""}${type !== 'Any' ? `&type=${type}` : ""}`)                                   
    const [index, setIndex] = useState(0)
    const [questionsRemaining, setQuestionsRemaining] = useState(numQuestions)
    const [numCorrectAnswers, setNumCorrectAnswers] = useState(0)
    const [isQuizFinished, setIsQuizFinished] = useState(false)

    const nextQuestion = () => {
        if (index < questions.length - 1) {
            setIndex(index + 1)
            setQuestionsRemaining(questionsRemaining - 1)
        } else {
            setIsQuizFinished(true)
        }
    }

    if (questions.length) {
        questions[index].question = questions[index].question.replace(/&quot;/g,'"')
        questions[index].question = questions[index].question.replace(/&#039;/g,"'")
        questions[index].question = questions[index].question.replace(/&eacute;/g,"é")
        questions[index].question = questions[index].question.replace(/&Aacute;/g,"Á")
    }
    
    return (
       <section className="quiz">
           {
               isLoading ?
               <h2>Loading Questions</h2>
               :
               (
                    isQuizFinished ?
                    <QuizFinished   numQuestions={numQuestions} 
                                    numCorrectAnswers={numCorrectAnswers} 
                    />
                    :
                    (   
                        questions.length &&
                        <article className="questionContainer">
                            <p>{`Questions Remaining: ${questionsRemaining}`}</p>
                            <p>{`Correct Answers: ${numCorrectAnswers}`}</p>
                            <p>{questions[index].question}</p>
                            <article className="answers">
                                <Answers    incorrectAnswers={questions[index].incorrect_answers} 
                                            correctAnswer={questions[index].correct_answer}
                                            type={questions[index].type}
                                            nextQuestion={nextQuestion}
                                            numCorrectAnswers={numCorrectAnswers}
                                            setNumCorrectAnswers={setNumCorrectAnswers}
                                />
                            </article>
                        </article>
                    )
               )
                
           }
       </section>
   )
}

export default Quiz