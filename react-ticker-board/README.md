# react-ticker-board

A React component for creating a tickerboard effect.

See a [demo](https://rjkerrison.co.uk/ticker-board/demo/react/build/).

Under the hood, it's using the [Ticker Board vanilla plugin](https://rjkerrison.co.uk/ticker-board/).

Visit the [GitHub repository](https://github.com/rjkerrison/ticker-board.git).

## Example

Perhaps you're running an airport with flights to Barcelona and Moscow?

```jsx
const App = () => {
  const messages = ['Barcelona 10:05', 'Moscow 10:15']

  return (
    <TickerBoard
      messages={messages}
      count={messages.length}
      size={24}
      theme={'dark'}
    />
  )
}
```

- _messages_, an array of strings to display
- _count_, the number of rows on the board
- _size_, the number of cells in each row of the board
- _theme_, (optional) one of `'light'`or `'dark'` — if omitted, the board defaults to match user's light mode or dark mode preference
