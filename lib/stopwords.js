const sw = require('stopword')

module.exports = function (content, language) {
  if (!language) language = 'en'
  return sw.removeStopwords(content.split(' '), sw[language])
}
