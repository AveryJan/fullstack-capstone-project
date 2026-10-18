const natural = require('natural');

const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');

function scoreSentiment(text) {
  const tokens = new natural.WordTokenizer().tokenize(String(text));
  return analyzer.getSentiment(tokens);
}

if (require.main === module) {
  console.log(scoreSentiment(process.argv.slice(2).join(' ') || 'This is wonderful'));
}

module.exports = { scoreSentiment };
