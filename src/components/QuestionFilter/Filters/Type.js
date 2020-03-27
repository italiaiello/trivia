import React from 'react'

const Type = ({ setType }) => {

    const onTypeChange = e => {
        setType(e.target.value)
    }

    return (
        <select id="categories" name="categories" onChange={onTypeChange}>
            <option value="Any">Any</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
        </select>
    )
}

export default Type