import { useDataFetch } from './displayQuestions'
import { act, renderHook } from "@testing-library/react-hooks";

const getControlledPromise = () => {
    let deferred;
    const promise = new Promise((resolve, reject) => {
        deferred = {resolve, reject}
    })
    return {deferred, promise}
}

describe('useDataFetch', () => {
    it('fetches questions from the url constructed from various parameters', async () => {
        global.fetch = jest.fn()

        await act(async () => renderHook(() => useDataFetch(5, 'Any', 'Any', 'Any')))

        expect(global.fetch).toBeCalledWith('https://opentdb.com/api.php?amount=5&encode=url3986')
    })
})

describe('while fetching data', () => {
    it('handles loading state correctly', async () => {
        const {deferred, promise} = getControlledPromise()

        global.fetch = jest.fn(() => promise)

        const {result, waitForNextUpdate} = renderHook(useDataFetch)

        expect(result.current.isLoading).toBe(true)
        deferred.resolve()

        await waitForNextUpdate()

        expect(result.current.isLoading).toBe(false)
    })
})

describe('when received data successfully', () => {
    it('handles successful state correctly', async () => {
        const {deferred, promise} = getControlledPromise()
        global.fetch = jest.fn(() => promise)

        const {result, waitForNextUpdate} = renderHook(useDataFetch)
        deferred.resolve({json: () => ({results: [1, 2, 3, 4, 5]})})

        await waitForNextUpdate()

        expect(result.current.questions.length).toEqual(5)
    })
})

describe('with an error during request', () => {
    it.todo('handles error state correctly')
})

