const generateDeck = require('./game/generatedeck');
const shuffle = require('./game/shuffle');

const deal = cards => {
  return cards.splice(0, 2);
};

const play = () => {
  console.log('Welcome to BlackJack!');
  let deck = generateDeck();
  console.log(deck.length);
  deck = deal(shuffle(deck));
  console.log('Your cards are', deck[0].name, deck[1].name);
  console.log(deck.length);
  console.log('Current total: ', deck[0].value + deck[1].value);
};

console.log(play());
