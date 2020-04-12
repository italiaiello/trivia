import React, { useState } from 'react'
import { useDataFetch } from '../../hooks/displayQuestions'
import Answers from './Answers/Answers'
import QuizFinished from './QuizFinished/QuizFinished'

const Quiz = ({ numQuestions, 
                setNumQuestions,
                category,
                difficulty,
                type,
                onRouteChange 
            }) => {
    
    const [isLoading, questions] = useDataFetch(`https://opentdb.com/api.php?amount=${numQuestions}${category !== 'Any' ? `&category=${category}` : ""}${difficulty !== 'Any' ? `&difficulty=${difficulty}` : ""}${type !== 'Any' ? `&type=${type}` : ""}`)                                   
    const [index, setIndex] = useState(0)
    const [questionsRemaining, setQuestionsRemaining] = useState(numQuestions)
    const [numCorrectAnswers, setNumCorrectAnswers] = useState(0)
    const [isQuizFinished, setIsQuizFinished] = useState(false)
    const [chosenAnswer, setChosenAnswer] = useState('')

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
        onRouteChange('home')
    }

    if (questions.length) {
        console.log(unescape('&quot;&quot;&quot;'))
        questions[index].question = questions[index].question.replace(/&quot;/g,'"')
        questions[index].question = questions[index].question.replace(/&#039;/g,"'")
        questions[index].question = questions[index].question.replace(/&eacute;/g,"é")
        questions[index].question = questions[index].question.replace(/&Aacute;/g,"Á")
        questions[index].question = questions[index].question.replace(/&rsquo;/g,"'")
        questions[index].question = questions[index].question.replace(/&lsquo;/g,"'")
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
                            <article className="answers">
                                <Answers    incorrectAnswers={questions[index].incorrect_answers} 
                                            correctAnswer={questions[index].correct_answer}
                                            type={questions[index].type}
                                            nextQuestion={nextQuestion}
                                            numCorrectAnswers={numCorrectAnswers}
                                            setNumCorrectAnswers={setNumCorrectAnswers}
                                            chosenAnswer={chosenAnswer}
                                            setChosenAnswer={setChosenAnswer}
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