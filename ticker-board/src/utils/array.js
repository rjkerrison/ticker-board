const getRandomChoice = function (array) {
  const i = Math.floor(Math.random() * array.length)
  return array[i]
}
const getRandomFilterChoice = function (array, filter) {
  return array.filter(filter).getRandomChoice()
}
const getRandomSlice = function (array, n) {
  const i = Math.floor(Math.random() * array.length)
  return array.slice(i, i + (n || 1))
}

const appendItemsUpToLength = function (array, item, length) {
  if (length <= array.length) {
    return array
  }
  return array.concat(new Array(length - array.length).fill(item))
}

export {
  getRandomChoice,
  getRandomFilterChoice,
  getRandomSlice,
  appendItemsUpToLength,
}
