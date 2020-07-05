import { useDataFetch } from './displayQuestions'
import { act, renderHook } from "@testing-library/react-hooks";

describe('useDataFetch', () => {
    it('fetches questions from the url constructed from various parameters', async () => {
        global.fetch = jest.fn()

        await act(async () => renderHook(() => useDataFetch(5, 'Any', 'Any', 'Any')))

        expect(global.fetch).toBeCalledWith('https://opentdb.com/api.php?amount=5&encode=url3986')
    })
})

describe('while fetching data', () => {
    it.todo('handles loading state correctly')
})

describe('when received data successfully', () => {
    it.todo('handles successful state correctly')
})

describe('with an error during request', () => {
    it.todo('handles error state correctly')
})

