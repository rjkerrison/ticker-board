document.querySelectorAll('.create-ticker').forEach((ticker, i) => {
  const messages = Array.from(ticker.querySelectorAll('li')).map(
    (m) => m.innerText
  )
  const boardElement = document.createElement('div')
  ticker.replaceWith(boardElement)

  const defaultMessage = new Array(24).fill('\xa0').join('')
  const board = new Board(boardElement, messages.length, 24)

  const nextMessage = () => {
    const newMessages = Array.from(board.messages)
    newMessages.shift()

    if (messages.indexOf(board.messages[0]) > -1) {
      newMessages.push(defaultMessage)
    } else {
      const indexToAdd =
        messages.indexOf(board.messages[messages.length - 1]) + 1

      newMessages.push(messages[indexToAdd])
    }
    board.updateMessages(newMessages)
  }

  boardElement.addEventListener('click', nextMessage)
  setTimeout(() => {
    nextMessage()
    setInterval(nextMessage, 7500)
  }, 1000)
})
