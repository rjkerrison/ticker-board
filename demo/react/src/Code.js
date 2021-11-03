import React from 'react'

const Code = () => {
  return (
    <div>
      <p>Displaying is easy:</p>
      <pre>
        <code>
          {`<TickerBoard
    messages={messages}
    count={count}
    size={24}
    />`}
        </code>
      </pre>
      <p>
        If <code>messages</code> is a state variable in the calling context,
        when it updates, the <strong>TickerBoard</strong> React component will
        update the messages accordingly.
      </p>
    </div>
  )
}

export default Code
