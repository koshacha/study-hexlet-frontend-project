// eslint-disable-next-line import/extensions
import { randomInteger, isIntegerPrime, getGCD } from './math.js';

export const evenGame = () => {
  const getRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestion = () => {
    const num = randomInteger(5, 50);
    const isEven = num % 2 === 0;
    return {
      question: `Question: ${num}`,
      answer: isEven ? 'yes' : 'no',
    };
  };

  return { getRules, getQuestion };
};

export const primeGame = () => {
  const getRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQuestion = () => {
    const num = randomInteger(2, 50);
    const isPrime = isIntegerPrime(num);
    return {
      question: `Question: ${num}`,
      answer: isPrime ? 'yes' : 'no',
    };
  };

  return { getRules, getQuestion };
};

export const gcdGame = () => {
  const getRules = () => 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => {
    const a = randomInteger(2, 30);
    const b = randomInteger(2, 30);
    const result = getGCD(a, b);
    return {
      question: `Question: ${a} ${b}`,
      answer: String(result),
    };
  };

  return { getRules, getQuestion };
};

export const progressionGame = () => {
  const getRules = () => 'What number is missing in the progression?';
  const getQuestion = () => {
    const firstElement = randomInteger(1, 10);
    const multiplier = randomInteger(2, 10);
    const length = randomInteger(5, 15);
    const indexToAnswer = randomInteger(0, length - 1);
    const sequence = Array(length).fill(1)
      .map((u, i) => (firstElement + (multiplier * i)));
    const answerNum = sequence[indexToAnswer];
    sequence[indexToAnswer] = '..';
    return {
      question: `Question: ${sequence.join(' ')}`,
      answer: String(answerNum),
    };
  };

  return { getRules, getQuestion };
};

export const calcGame = () => {
  const getOperand = () => {
    const num = randomInteger(1, 3);
    switch (num) {
      case 1: return '+';
      case 2: return '-';
      case 3: return '*';
      default: {
        throw new Error(`Error: ${num}`);
      }
    }
  };

  const getResult = (a, b, operand) => {
    switch (operand) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      default: {
        throw new Error(`Error: ${operand}`);
      }
    }
  };

  const getRules = () => 'What is the result of the expression?';
  const getQuestion = () => {
    const a = randomInteger(1, 10);
    const b = randomInteger(1, 10);
    const operand = getOperand();
    const result = getResult(a, b, operand);
    return {
      question: `Question: ${a} ${operand} ${b}`,
      answer: String(result),
    };
  };

  return { getRules, getQuestion };
};
