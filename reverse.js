const reverseWord = word => {
  const reversedWord = word.split('').reverse()
  const resultTitleCaseArray = reversedWord.map((letter, index) => {
    if (index === 0) return letter.toUpperCase()
    else return letter.toLowerCase()
  })
  return resultTitleCaseArray.join('')
}

const reverseName = name => {
  const nameArray = name.split(' ')
  const result = nameArray.map(word => {
    return reverseWord(word)
  })
  return result.join(' ')
}

const names = [
  'M Haidar Hanif',
  'Bara Limbong',
  'Fadhila Fajrin Bramantio',
  'Jonathan Nicolas',
  'Mario Rizki',
  'Muhammad Fahrianda',
  'Sakti Dewantoro'
]

const reversedNames = names.map(name => {
  return reverseName(name)
})

console.log(reversedNames)
