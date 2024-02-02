const invertObject = (obj) => {
    const result = {};
    Object.entries(obj).forEach(([key, value]) => {
        result[value] = key;
    })
    return result;
};

const originalObject1 = { a: 1, b: 2, c: 1 };
const invertedObject1 = invertObject(originalObject1);
console.log(invertedObject1); // Выведет: { '1': 'c', '2': 'b' }