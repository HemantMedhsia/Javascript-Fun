function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();

    arr.forEach(num => {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    });

    return [...duplicates];
}

module.exports = { findDuplicates };