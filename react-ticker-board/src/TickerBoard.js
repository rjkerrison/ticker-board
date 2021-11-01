import React, { useEffect, useRef, useState } from 'react'
import { Board } from 'ticker-board'

const TickerBoard = ({ messages, count, size, delay, theme }) => {
  const [board, setBoard] = useState(null)
  const ref = useRef()

  useEffect(() => {
    const board = new Board(ref.current, { count, size, delay, theme })
    setBoard(board)
  }, [ref])

  useEffect(() => {
    if (board) {
      board.updateCount(count)
      // Important: we need to keep messages immutable. We'll pass a copy, not the reference.
      board.updateMessages([...messages])
    }
  }, [board, messages, count])

  return <div ref={ref}></div>
}

export default TickerBoard
