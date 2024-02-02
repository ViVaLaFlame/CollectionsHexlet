const hasProperty = (obj, str) => {
    const keys = Object.keys(obj);
    return keys.includes(str);
};

console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true