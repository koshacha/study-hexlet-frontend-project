import readlineSync from 'readline-sync';

export default () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('Your name: ');
    console.log(`Hi, ${name}!`);
}