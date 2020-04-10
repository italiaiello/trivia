import React from 'react'

const Type = ({ setType }) => {

    const onTypeChange = e => {
        setType(e.target.value)
    }

    return (
        <article className="filterContainer">
            <select id="categories" name="categories" onChange={onTypeChange}>
                <option value="Any">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
            </select>
        </article>
    )
}

export default Type