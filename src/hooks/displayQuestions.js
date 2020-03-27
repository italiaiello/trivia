import { useState, useEffect } from 'react'

export const useDataFetch = (url, dependencies) => {

    const [isLoading, setIsLoading] = useState(false)
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        setIsLoading(true)

        console.log('Fetching questions...')
        console.log(url)
        fetch(url)
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
    }, [url])

    return [isLoading, questions]

}