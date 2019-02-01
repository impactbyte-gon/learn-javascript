const name = 'fadhila fajrin bramantio'

function convertToTitleCase(text) {
  const textArray = text.split(' ')

  const titleCaseArray = textArray.map(word => {
    const titleCaseWord = word.charAt(0).toUpperCase()
    const lowerCaseWord = word.slice(1)
    const newWord = titleCaseWord + lowerCaseWord
    return newWord
  })

  const titleCaseWords = titleCaseArray.join(' ')

  return titleCaseWords
}

const quickConvert = text =>
  text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

console.log('BEFORE:', name)
console.log('AFTER:', quickConvert(name))
