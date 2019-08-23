let playerCards = [];

const deal = cards => {
  playerCards.push(cards[0]);
  playerCards.push(cards[1]);
  return playerCards;
};

const dealersCards = cards => {};

module.exports = { deal, dealersCards };
