const sliceAt = function (str, character) {
  return str.slice(str.indexOf(character) + 1)
}
const sliceTo = function (str, character) {
  return str.slice(0, str.indexOf(character) + 1)
}
const sliceBetween = function (str, from, to) {
  const doubleStr = str + str
  const slicedAt = sliceAt(doubleStr, from)
  const slicedBetween = sliceTo(slicedAt, to)
  return slicedBetween
}

export { sliceBetween }
