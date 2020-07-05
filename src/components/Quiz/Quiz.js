import React, { useState } from 'react'
import { useDataFetch } from '../../hooks/displayQuestions'
import Answers from './Answers/Answers'
import QuizFinished from './QuizFinished/QuizFinished'

const Quiz = ({ numQuestions, setNumQuestions,
                category, setCategory,
                difficulty, setDifficulty,
                type, setType,
                onRouteChange 
            }) => {
    
    const [isLoading, questions] = useDataFetch(numQuestions, category, difficulty, type)                                  
    const [index, setIndex] = useState(0)
    const [questionsRemaining, setQuestionsRemaining] = useState(numQuestions)
    const [numCorrectAnswers, setNumCorrectAnswers] = useState(0)
    const [isQuizFinished, setIsQuizFinished] = useState(false)
    const [chosenAnswer, setChosenAnswer] = useState('')
    const [currentAnswerOrder, setCurrentAnswerOrder] = useState([])

    const nextQuestion = () => {
        if (index < questions.length - 1) {
            setIndex(index + 1)
            setQuestionsRemaining(questionsRemaining - 1)
        } else {
            setIsQuizFinished(true)
        }
        setChosenAnswer('')
    }

    const resetQuiz = () => {
        setIndex(0)
        setQuestionsRemaining(0)
        setNumCorrectAnswers(0)
        setIsQuizFinished(false)
        setChosenAnswer('')
        setNumQuestions(0)
        setCategory('Any')
        setDifficulty('Any')
        setType('Any')
        onRouteChange('home')
    }

    if (questions.length) {
        questions[index].question = unescape(questions[index].question)
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
                                    resetQuiz={resetQuiz}
                    />
                    :
                    (   
                        questions.length &&
                        <section className="questionContainer">
                            <article className="quizStatus">
                                <p>{`Questions Remaining: ${questionsRemaining}`}</p>
                                <p>{`Correct Answers: ${numCorrectAnswers}`}</p>
                            </article>
                            <p className="question">{questions[index].question}</p>
                            <article>
                                <Answers    incorrectAnswers={questions[index].incorrect_answers} 
                                            correctAnswer={questions[index].correct_answer}
                                            type={questions[index].type}
                                            nextQuestion={nextQuestion}
                                            numCorrectAnswers={numCorrectAnswers}
                                            setNumCorrectAnswers={setNumCorrectAnswers}
                                            chosenAnswer={chosenAnswer}
                                            setChosenAnswer={setChosenAnswer}
                                            currentAnswerOrder={currentAnswerOrder}
                                            setCurrentAnswerOrder={setCurrentAnswerOrder}
                                />
                            </article>
                        </section>
                    )
               )
                
           }
       </section>
   )
}

export default Quiz