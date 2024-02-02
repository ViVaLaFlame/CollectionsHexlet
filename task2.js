const sumUniqueNumbers = (array) => {
    let uniq = [... new Set(array)];
    return uniq.reduce((sum, current) => sum + current, 0);
};

console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6