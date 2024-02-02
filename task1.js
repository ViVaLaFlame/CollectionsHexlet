const findLongestWord = (array) => {
    let longestWord = array[0];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].length > longestWord.length){
            longestWord = array[i];
        }
    }
    return longestWord;
};

console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"