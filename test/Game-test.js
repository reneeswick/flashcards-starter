const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Game', function() {
  it('should keep track of the current round', function() {
    const game = new Game();
    expect(game.currentRound).to.deep.equal({});
  });

  it('should instantiate a deck with cards when the game starts', function() {
    const game = new Game();
    game.start();
    expect(game.deck).to.be.an.instanceOf(Deck);
  });
});
