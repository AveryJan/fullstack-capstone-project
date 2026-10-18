const natural = require('natural');
const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');
function scoreSentiment(text) { return analyzer.getSentiment(natural.WordTokenizer ? new natural.WordTokenizer().tokenize(String(text)) : String(text).split(/\s+/)); }
if (require.main === module) console.log(scoreSentiment(process.argv.slice(2).join(' ') || 'This is wonderful'));
module.exports = { scoreSentiment };
