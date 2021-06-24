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

Once imported, the easiest way is

```html

```

## Advantages

- Vanilla JS, so can be used with any framework
- Webpack minified
- Node module available
- Good performance thanks to `window.requestAnimationFrame`

## Disadvantages

- Could be typescript
- Low on documentation

