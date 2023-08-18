let newarray = [];

const reverseString = function(stringToReverse) {
    const result = [];
    for (i=0; i < stringToReverse.length; i++) {
    result[i] = stringToReverse.slice(i, i+1);
}
    reversedResult =result.reverse();    
return reversedResult.join("");
}

console.log(reverseString("Hello"));

// Do not edit below this line
module.exports = reverseString;
