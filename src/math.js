export const randomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const isIntegerPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const getGCD = (a, b) => {
  const minNum = Math.min(a, b);
  const maxNum = Math.max(a, b);
  for (let i = minNum; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) return i;
  }
  return maxNum;
};
