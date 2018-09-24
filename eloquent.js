



// Your code here.
//This feels unnesecarily short
min = (x,y) => ((y < x) ? y : x);

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



// Your code here.
function isEven(num){
    switch(num){
        case 0 : return true;
        case 1 : return false;
        default : return isEven(Math.abs(num-2));
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??



/**************BEANSSS!?************* */
// Your code here.

function countBs(stringContaingBsMaybe){
    return countChar(stringContaingBsMaybe, "B") 
}
function countChar(inputString, charToFInd){

    return inputString
            .split("")
            .reduce(
                //This line seems a bit obtuse
                (tot,x) => (x === charToFInd ? tot+1 : tot), 0
            );
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4