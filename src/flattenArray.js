function flattenArray(arr) {
    return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
}

module.exports = { flattenArray };