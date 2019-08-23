const generateDeck = require('./game/generatedeck');
const shuffle = require('./game/shuffle');
const { deal } = require('./game/deal');

const play = () => {
  console.log('Welcome to BlackJack!');
  let deck = generateDeck();
  deck = shuffle(deck);
  deck = deal(deck);
  console.log('Your cards are: ', deck[0].name, deck[1].name);
  console.log('Current total: ', deck[0].value + deck[1].value);
};

console.log(play());
