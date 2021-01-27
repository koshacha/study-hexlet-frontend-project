/* eslint-disable import/extensions */
import Game from './Game.js';

export default class Prime extends Game {
  generateNumber(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  getRules() {
    return 'Answer "yes" if given number is prime. Otherwise answer "no".';
  }

  isNumberPrime(num) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

  createQuestion() {
    const number = this.generateNumber(10, 100);
    const isPrime = this.isNumberPrime(number);
    return {
      question: `Question: ${number}`,
      answer: isPrime ? 'yes' : 'no',
    };
  }
}
