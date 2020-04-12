import React, { useState } from 'react'
import Categories from './Filters/Categories/Categories'
import Difficulty from './Filters/Difficulty/Difficulty'
import Type from './Filters/Type/Type'
import Quiz from '../Quiz/Quiz';

const QuestionFilter = () => {
    
    const [numQuestions, setNumQuestions] = useState(0)
    const [category, setCategory] = useState('Any')
    const [difficulty, setDifficulty] = useState('Any')
    const [type, setType] = useState('Any')
    const [isFilterCorrect, setIsFilterCorrect] = useState(true)

    const [route, setRoute] = useState('home')

    const onRouteChange = newRoute => {
        setRoute(newRoute)
    }

    const onNumQuestionsChange = e => {
        if (numQuestions.toString().length === 0) {
            setIsFilterCorrect(true)
        }
        setNumQuestions(e.target.value)
    }

    const checkNumQuestions = e => {
        e.preventDefault()
        if (numQuestions.toString().length === 0) {
            setIsFilterCorrect(false)
        } else if ( numQuestions <= 0 || isNaN(numQuestions) || 
                    numQuestions > 50) {
            setIsFilterCorrect(false)
        } else {
            setNumQuestions(Math.round(Number(numQuestions)))
            setIsFilterCorrect(true)
            onRouteChange('quiz')
        }
    }

    return (
        <section>
            {
                route === 'home' ?
                <article>
                    <h2>What kind of questions would you like?</h2>
                    <form className="questionFilter" onSubmit={checkNumQuestions}>
                        <input  type="text" 
                                placeholder="Number of questions (max 50)" 
                                onChange={onNumQuestionsChange} 
                        />
                        <Categories setCategory={setCategory} />
                        <Difficulty setDifficulty={setDifficulty} />
                        <Type setType={setType} />
                        <button className="filterButton" type="submit">Submit</button>
                        <article className={isFilterCorrect ? "errorMessage hide" : "errorMessage show"}>
                            <p>Please enter a valid number of questions</p>
                        </article>
                    </form>
                </article>
                :
                <Quiz   numQuestions={numQuestions} 
                        setNumQuestions={setNumQuestions}
                        category={category}
                        difficulty={difficulty}
                        type={type}
                        onRouteChange={onRouteChange}
                />
            }
        </section>
    )
}

export default QuestionFilter