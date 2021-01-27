import Game from './Game.js';

export default class Even extends Game {
  constructor(props) {
    super(props);
  }

  generateNumber(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  createQuestion() {
    const number = this.generateNumber(0, 100);
    const isEven = number % 2 === 0;
    return {
      question: `Question: ${number}`,
      answer: isEven ? 'yes' : 'no'
    };
  }
};