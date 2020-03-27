import React from 'react'
import Categories from './Filters/Categories'

const QuestionFilter = ({ onRouteChange }) => {
    return (
        <section>
            <article>
                <form className="questionFilter">
                    <input type="text" placeholder="Number of questions (max 50)" />
                    <Categories />
                    <button onClick={() => onRouteChange('quiz')}>Submit</button>
                </form>
            </article>
        </section>
    )
}

export default QuestionFilter