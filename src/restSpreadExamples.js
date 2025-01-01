function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2];

module.exports = { sum, combined };