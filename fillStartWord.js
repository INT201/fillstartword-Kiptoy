const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  return word.startsWith(startWord) ? word : (word == null || word == undefined) ? undefined : startWord + word
}
module.exports = fillStartWord
