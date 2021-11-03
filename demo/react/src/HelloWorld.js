import { useState } from 'react'
import { TickerBoard } from 'react-ticker-board'

const HelloWorld = () => {
  const [messages, setMessages] = useState([
    'I am using the',
    'React Ticker Board',
    'plugin!',
  ])
  const [newMessage, setNewMessage] = useState('')
  const [count, setCount] = useState(5)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newMessage) {
      setMessages([...messages, newMessage])
      setNewMessage('')
    }
  }

  return (
    <>
      <TickerBoard messages={messages} count={count} size={24} theme={'dark'} />
      <h3>Add another message</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={({ target }) => setNewMessage(target.value)}
          value={newMessage}
          placeholder="Specify new message"
          type="text"
        />
        <input type="submit" disabled={!newMessage} value="Add a new message" />
        <input
          type="button"
          onClick={() => setCount(count + 1)}
          value="Add row"
        />
      </form>
    </>
  )
}

export default HelloWorld
