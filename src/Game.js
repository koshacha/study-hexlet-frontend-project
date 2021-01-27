import {userEnter} from "./cli.js";

export default class Game {
  static SCORE_TO_WIN = 3;

  constructor(props) {
    this.state = {
      username: props.name,
      isFault: false,
      score: 0
    };
  }

  isWin() {
    return this.state.score >= Game.SCORE_TO_WIN;
  }

  isLose() {
    return this.state.isFault;
  }

  isGameOver() {
    return this.isLose() || this.isWin();
  }

  createQuestion() {
    return {};
  }

  startGame() {
    this.state = {
      ...this.state,
      isFault: false,
      score: 0
    };

    while (!this.isGameOver()) {
      const { question, answer } = this.createQuestion();
      const userAnswer = userEnter(question);
      if (answer === userAnswer) {
        this.state = {
          ...this.state,
          score: this.state.score + 1
        };
        console.log('Correct!');
      } else {
        this.state = {
          ...this.state,
          isFault: true
        };
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      }
    }

    if (this.isWin()) {
      console.log(`Congratulations, ${this.state.username}!`)
    } else {
      console.log(`Let's try again, ${this.state.username}!`);
    }
  }
};