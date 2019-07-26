const chalk = require('chalk');

const generateDeck = require('./game/generatedeck');
const shuffle = require('./game/shuffle');
const deal = require('./game/deal');

const play = () => {
  console.log(chalk.black.bgGreen('Welcome to BlackJack!'));
  let deck = generateDeck();
  deck = deal(shuffle(deck));
  console.log(chalk.black.bgGreen('Your cards are', deck[0].name, deck[1].name));
  console.log(chalk.black.bgGreen('Current total: ', deck[0].value + deck[1].value));
};

console.log(play());
