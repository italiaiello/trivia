import React, { useState } from 'react'
import { useDataFetch } from '../hooks/displayQuestions'

const Quiz = ({ numQuestions, category, difficulty, type }) => {
    
    const [isLoading, questions] = useDataFetch(`https://opentdb.com/api.php?amount=10`)
                                                

    const [index, setIndex] = useState(0)

    if (questions.length) {
        questions[index].question = questions[index].question.replace(/&quot;/g,'"')
        questions[index].question = questions[index].question.replace(/&#039;/g,"'")
    }
    
    return (
       <section className="quiz">
           {
               isLoading ?
               <h2>Loading Questions</h2>
               :
                <article>
                    {   
                        questions.length &&
                        <p>{questions[index].question}</p>
                    }
                    
                    <button onClick={() => setIndex(index + 1)}>Next Question</button>
                </article>
                
               
               
           }
       </section>
   )
}

export default Quiz

// ${category !== 'Any' && `&category=${category}`}
// ${difficulty !== 'Any' && `&difficulty=${difficulty}`}
// ${type !== 'Any' && `&type=${type}`}