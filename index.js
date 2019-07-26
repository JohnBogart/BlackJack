const generateDeck = require('./generateDeck');

const shuffle = cards => {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

const deal = cards => {
  return cards.splice(0, 2);
}

const play = () => {
  console.log("Welcome to BlackJack!");
  let deck = generateDeck();
  deck = deal(shuffle(deck));
  console.log("Your cards are", deck[0].name, deck[1].name);
}

console.log(play());