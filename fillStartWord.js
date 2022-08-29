const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  return word.startsWith(startWord) ? word : startWord + word
}
module.exports = fillStartWord
