const numbers = [5, 3, 8, 1, 2];

const ascending = [...numbers].sort((a, b) => a - b);

const descending = [...numbers].sort((a, b) => b - a);

module.exports = { ascending, descending };