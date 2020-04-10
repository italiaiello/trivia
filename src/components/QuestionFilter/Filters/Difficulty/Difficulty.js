import React from 'react'

const Difficulty = ({ setDifficulty }) => {

    const onDifficultyChange = e => {
        setDifficulty(e.target.value)
    }

    return (
        <article className="filterContainer">
            <select id="difficulty" name="difficulty" onChange={onDifficultyChange}>
                <option value="Any">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </article>
    )
}

export default Difficulty