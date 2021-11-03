import React from 'react'
import { render, screen } from '@testing-library/react'

jest.mock('ticker-board')

import TickerBoard from '../src/TickerBoard'
import { Board } from 'ticker-board'

const messages = ['Example', 'testing', 'messages']
const count = messages.length

let node
let updateMessages
let updateCount
let component

beforeEach(() => {
  node = document.createElement('div')
  updateMessages = jest.fn()
  updateCount = jest.fn()

  Board.mockReturnValue({
    ...Board,
    updateMessages,
    updateCount,
  })

  component = render(
    <TickerBoard messages={messages} count={count} size={24} theme={'dark'} />,
    node
  )
})

describe(TickerBoard, () => {
  it('renders', () => {
    expect(component.baseElement).toMatchSnapshot('TickerBoard renders')
  })

  it('displays the messages', () => {
    // ASSERT
    // Check updateMessages is called as we'd expect
    expect(updateMessages).toHaveBeenCalledTimes(1)
    expect(updateMessages).toHaveBeenCalledWith(messages)
  })

  it('updates the messages', () => {
    const { rerender } = component
    const timesCalled = Board.mock.calls.length
    const id = screen.getByTestId('instance-id').textContent

    const newMessages = ['Second set', 'of messages']
    rerender(
      <TickerBoard
        messages={newMessages}
        count={count}
        size={24}
        theme={'dark'}
      />,
      node
    )

    // ASSERT
    // no new board on rerender
    expect(Board).toHaveBeenCalledTimes(timesCalled)
    // and no new TickerBoard component
    expect(screen.getByTestId('instance-id')).toHaveTextContent(id)

    // Check updateMessages is called an extra time as we'd expect
    expect(updateMessages).toHaveBeenCalledTimes(2)
    expect(updateMessages).toHaveBeenCalledWith(newMessages)
  })
})
