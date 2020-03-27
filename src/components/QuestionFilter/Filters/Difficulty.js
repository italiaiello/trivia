import React from 'react'

const Difficulty = ({ setDifficulty }) => {

    const onDifficultyChange = e => {
        setDifficulty(e.target.value)
    }

    return (
        <select id="categories" name="categories" onChange={onDifficultyChange}>
            <option value="Any">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
    )
}

export default Difficulty