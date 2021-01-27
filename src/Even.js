/* eslint-disable import/extensions */
import Game from './Game.js';

export default class Even extends Game {
  generateNumber(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  getRules() {
    return 'Answer "yes" if the number is even, otherwise answer "no".';
  }

  createQuestion() {
    const number = this.generateNumber(0, 100);
    const isEven = number % 2 === 0;
    return {
      question: `Question: ${number}`,
      answer: isEven ? 'yes' : 'no',
    };
  }
}
