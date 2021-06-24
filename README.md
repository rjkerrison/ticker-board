# ticker-board

A JavaScript plugin for creating a tickerboard effect.

See the [Ticker Board](https://rjkerrison.co.uk/ticker-board/)
page for more info.

## Importing it

There are basically two ways to import, and one way to use the Tickerboard.

### Importing minified JS

Download the file at [`./ticker-board/dist/ticker-board.min.js`](./ticker-board/dist/ticker-board.min.js) to begin.

A simple

```html
<script src="./ticker-board.min.js"><script>
```

will do it.

### Importing node module

Run

```sh
npm install ticker-board
```

Then you can import

```js
import { TickerBoard } from 'ticker-board'
```

or require

```js
const { TickerBoard } = require('ticker-board')
```

## Usage

Once imported, the easiest way is to create a list and
let the default behaviour scroll the messages.

```html
<ul class="create-ticker">
    <li>Vanilla JS</li>
    <li>CSS included</li>
    <li>Auto rotating board</li>
    <li>Manual update API</li>
    <li>That's all so far</li>
</ul>
```

And then in your JavaScript,

```js
  new TickerBoard('.create-ticker')
```

For more complicated examples,
there is a `board.updateMessages()` method.

```js
document.getElementById('my-board')
const board = new Board(element)
board.updateMessages(['Apple', 'Banana', 'Cherry'])
```

See [`./demo/`](./main/tree/demo) for more examples.

## Advantages

- Vanilla JS, so can be used with any framework
- Webpack minified
- Node module available
- Good performance thanks to `window.requestAnimationFrame`

## Disadvantages

- Could be typescript
- Low on documentation

