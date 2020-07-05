import React from 'react'
import { shallow } from 'enzyme'
import { useDataFetch } from './displayQuestions'

function HookWrapper(props) {
    const hook = props.hook ? props.hook() : undefined
    return <div hook={hook} />
}

const url = `https://opentdb.com/api.php?amount=${'5'}&encode=url3986${""}${""}${""}`

it('should set init value', () => {
    let wrapper = shallow(<HookWrapper hook={() => useDataFetch(`${url}`)} />)

    let { hook } = wrapper.find('div').props()
    let [isLoading, questions] = hook
    expect(isLoading).toEqual(false)
    expect(questions.length).toEqual(0)

    wrapper = shallow(<HookWrapper hook={() => useDataFetch(`${url}`)} />)
})