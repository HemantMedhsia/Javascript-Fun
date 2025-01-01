const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(num => num * num);

const evenNumbers = numbers.filter(num => num % 2 === 0);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

module.exports = { squares, evenNumbers, sum };