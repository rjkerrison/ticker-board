import { useState } from 'react'
import { TickerBoard } from 'react-ticker-board'

const HelloWorld = () => {
  const [messages, setMessages] = useState([
    'Hello there!',
    'I am using the',
    '!! React Ticker Board !!',
    'plugin',
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
      <h1>Ticker Board: React</h1>
      <TickerBoard messages={messages} count={count} size={24} theme={'dark'} />
      <form onSubmit={handleSubmit}>
        <input
          onChange={({ target }) => setNewMessage(target.value)}
          value={newMessage}
          placeholder="Specify new message"
        />
        <input type="submit" disabled={!newMessage} value="Add a new message" />
        <input type="button" onClick={() => setCount(count + 1)} value="+1" />
      </form>
    </>
  )
}

export default HelloWorld
