/* eslint-disable import/extensions */
import Game from './Game.js';

export default class Calc extends Game {
  generateNumber(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  getRules() {
    return 'What is the result of the expression?';
  }

  generateOperation() {
    const num = this.generateNumber(1, 3);
    switch (num) {
      case 1: return '+';
      case 2: return '-';
      case 3: return '*';
      default: {
        throw new Error(`Error: ${num}`);
      }
    }
  }

  getResult(a, b, operation) {
    switch (operation) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      default: {
        throw new Error(`Error: ${operation}`);
      }
    }
  }

  createQuestion() {
    const numberA = this.generateNumber(1, 15);
    const numberB = this.generateNumber(1, 15);
    const operand = this.generateOperation();
    const result = this.getResult(numberA, numberB, operand);
    return {
      question: `Question: ${numberA} ${operand} ${numberB}`,
      answer: String(result),
    };
  }
}
