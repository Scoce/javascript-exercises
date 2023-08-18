
function repeatString(word, num) {
    let string ="";
   
    for (let i = 0; i < num; i++) {
        
        string+=word;
    } 
    if (num < 0) {
        string = "ERROR"
    }
    return string;
}

// Do not edit below this line
module.exports = repeatString;
