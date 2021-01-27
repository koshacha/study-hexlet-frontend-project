/* eslint-disable import/extensions */
import Game from './Game.js';

export default class Progression extends Game {
  generateNumber(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  getRules() {
    return 'What number is missing in the progression?';
  }

  createQuestion() {
    const firstElement = this.generateNumber(1, 10);
    const multiplier = this.generateNumber(2, 10);
    const length = this.generateNumber(5, 15);
    const indexToAnswer = this.generateNumber(0, length - 1);
    const sequence = Array(length).fill(1)
      .map((u, i) => (firstElement + (multiplier * i)));
    const answerNum = sequence[indexToAnswer];

    sequence[indexToAnswer] = '..';

    return {
      question: `Question: ${sequence.join(' ')}`,
      answer: String(answerNum),
    };
  }
}
