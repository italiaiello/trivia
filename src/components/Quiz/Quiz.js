import React, { useState } from 'react'
import { useDataFetch } from '../../hooks/displayQuestions'
import Answers from './Answers'

const Quiz = ({ numQuestions, category, difficulty, type }) => {
    
    const [isLoading, questions] = useDataFetch(`https://opentdb.com/api.php?amount=${numQuestions}${category !== 'Any' ? `&category=${category}` : ""}${difficulty !== 'Any' ? `&difficulty=${difficulty}` : ""}${type !== 'Any' ? `&type=${type}` : ""}`)                                   
    const [index, setIndex] = useState(0)

    const nextQuestion = () => {
        if (index < questions.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
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
                    questions.length &&
                    <article className="questionContainer">
                        <p>{questions[index].question}</p>
                        <article className="answers">
                            <Answers incorrectAnswers={questions[index].incorrect_answers} 
                                        correctAnswer={questions[index].correct_answer}
                                        type={questions[index].type}
                                        nextQuestion={nextQuestion}
                            />
                        </article>
                    </article>
                )
           }
       </section>
   )
}

export default Quiz