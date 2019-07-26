const clubs = require('../suits/clubs');
const diamonds = require('../suits/diamonds');
const spades = require('../suits/spades');
const hearts = require('../suits/hearts');


const generateDeck = () => {
  const deck = clubs.concat(diamonds).concat(spades).concat(hearts);
  return deck;
};

module.exports = generateDeck