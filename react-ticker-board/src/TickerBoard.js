import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Board } from 'ticker-board'

let idCounter = 1

const TickerBoard = ({ messages, count, size, delay, theme }) => {
  const [board, setBoard] = useState(null)
  const [element, setElement] = useState(null)

  const id = useRef(idCounter++)

  const ref = useCallback((node) => {
    if (node !== null && node !== element) {
      setElement(node)
    }
  }, [])

  useEffect(() => {
    if (element && !board) {
      const board = new Board(element, { count, size, delay, theme })
      setBoard(board)
    }
  }, [element])

  useEffect(() => {
    if (board) {
      board.updateCount(count)
      // Important: we need to keep messages immutable. We'll pass a copy, not the reference.
      board.updateMessages([...messages])
    }
  }, [board, messages, count])

  return (
    <div id="ticker">
      {/*
        The ref is a child so that it can be freely manipulated by Board.
        React will unmount at the higher level.
      */}
      <div id="ticker-child" ref={ref}>
        <div></div>
        <span data-testid="instance-id">{id.current}</span>
      </div>
    </div>
  )
}

export default TickerBoard
