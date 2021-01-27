/* eslint-disable import/extensions */
import Game from './Game.js';

export default class GCD extends Game {
  generateNumber(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  getRules() {
    return 'Find the greatest common divisor of given numbers.';
  }

  getResult(a, b) {
    const minNum = Math.min(a, b);
    const maxNum = Math.max(a, b);
    for (let i = minNum; i > 0; i -= 1) {
      if (a % i === 0 && b % i === 0) return i;
    }
    return maxNum;
  }

  createQuestion() {
    const numberA = this.generateNumber(2, 30);
    const numberB = this.generateNumber(2, 30);
    const result = this.getResult(numberA, numberB);
    return {
      question: `Question: ${numberA} ${numberB}`,
      answer: String(result),
    };
  }
}
