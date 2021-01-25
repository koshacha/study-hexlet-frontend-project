import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Your name: ');
  console.log(`Hi, ${name}!`);

  return name;
};

export const userEnter = (question) => {
  console.log(question);
  const string = readlineSync.question('Your answer: ');
  return string;
};