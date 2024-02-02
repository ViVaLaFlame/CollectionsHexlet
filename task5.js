const getPropertyValue = (obj, str) => {
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (key === str){
            return obj[key];
        }
    }
    return undefined;
};

console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // "Alice"
console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); // undefined
console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); // "Dell".