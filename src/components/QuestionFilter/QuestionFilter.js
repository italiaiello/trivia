import React, { useState } from 'react'
import Categories from './Filters/Categories'
import Difficulty from './Filters/Difficulty'
import Type from './Filters/Type'
import Quiz from '../Quiz/Quiz';

const QuestionFilter = () => {
    
    const [numQuestions, setNumQuestions] = useState(0)
    const [category, setCategory] = useState('Any')
    const [difficulty, setDifficulty] = useState('Any')
    const [type, setType] = useState('Any')

    const [route, setRoute] = useState('home')

    const onRouteChange = newRoute => {
        setRoute(newRoute)
    }

    const onNumQuestionsChange = e => setNumQuestions(e.target.value)

    return (
        <section>
            {
                route === 'home' ?
                <article>
                    <form className="questionFilter">
                        <input  type="text" 
                                placeholder="Number of questions (max 50)" 
                                onChange={onNumQuestionsChange} 
                        />
                        <Categories setCategory={setCategory} />
                        <Difficulty setDifficulty={setDifficulty} />
                        <Type setType={setType} />
                        <button onClick={() => onRouteChange('quiz')}>Submit</button>
                    </form>
                </article>
                :
                <Quiz   numQuestions={numQuestions} 
                        category={category} 
                        difficulty={difficulty} 
                        type={type}
                />
            }
        </section>
    )
}

export default QuestionFilter