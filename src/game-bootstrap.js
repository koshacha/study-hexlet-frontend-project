/* eslint-disable import/extensions */
import { userEnter } from './cli.js';

export default (userName, game) => {
  const MAX_SCORE = 3;
  const state = {
    userName,
    isFault: false,
    score: 0,
  };

  const isWin = () => state.score === MAX_SCORE;
  const isLose = () => state.isFault;
  const isGameOver = () => isLose() || isWin();
  const getQuestion = () => game.getQuestion();
  const getRules = () => game.getRules();
  const initGame = () => {
    console.log(getRules());

    while (!isGameOver()) {
      const { question, answer } = getQuestion();
      const userAnswer = userEnter(question);
      if (answer === userAnswer) {
        state.score += 1;
        console.log('Correct!');
      } else {
        state.isFault = true;
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      }
    }

    if (isWin()) {
      console.log(`Congratulations, ${state.userName}!`);
    } else {
      console.log(`Let's try again, ${state.userName}!`);
    }
  };

  initGame();
};
