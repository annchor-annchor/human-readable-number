var numberToWords = require('number-to-words');

module.exports = function toReadable (number) {
  var result = numberToWords.toWords(number)
  result = result.replace('-', ' ');
  result = result.replace(',', '');
  return(result) 
}

