import { useState, useEffect } from 'react'

export const useDataFetch = (numQuestions, category, difficulty, type) => {

    const [isLoading, setIsLoading] = useState(false)
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        setIsLoading(true)

        console.log('Fetching questions...')
        fetch(`https://opentdb.com/api.php?amount=${numQuestions}&encode=url3986${category !== 'Any' ? `&category=${category}` : ""}${difficulty !== 'Any' ? `&difficulty=${difficulty}` : ""}${type !== 'Any' ? `&type=${type}` : ""}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setQuestions(data.results)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setQuestions(["Couldn't find any questions"])
                setIsLoading(false)
            })
    }, [numQuestions, category, difficulty, type])

    return [isLoading, questions]

}