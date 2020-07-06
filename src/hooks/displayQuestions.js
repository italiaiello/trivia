import { useState, useEffect } from 'react'

export const useDataFetch = (numQuestions, category, difficulty, type) => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`https://opentdb.com/api.php?amount=${numQuestions}&encode=url3986${category !== 'Any' ? `&category=${category}` : ""}${difficulty !== 'Any' ? `&difficulty=${difficulty}` : ""}${type !== 'Any' ? `&type=${type}` : ""}`)
                const json = await response.json()
                setQuestions(json.results)
            } catch(error) {
                setError(error)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [numQuestions, category, difficulty, type])

    return { isLoading, questions, error }

}