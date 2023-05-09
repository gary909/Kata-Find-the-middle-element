function gimme (triplet) {
    const numOrder = Array.from(triplet); // create copy of array
    numOrder.sort(function(a, b){return a-b}); // sort copied array
    let middleNum = numOrder[1]; // find middle number
    let myCnt = 0;
    for(let i = 0; i < triplet.length;i++){ // compare positions
        myCnt = myCnt + 1;
        if(triplet[i] == middleNum){
            return myCnt - 1;
        }
    }
}

console.log(gimme([2, 3, 1])); //  0
console.log(gimme([5, 10, 14])); //  1

console.log(gimme([2.1, 3.2, 1.4])); //  0
console.log(gimme([5.9, 10.4, 14.2])); //  1

console.log(gimme([-2, -3, -1])); //  0
console.log(gimme([-5, -10, -14])); //  1

console.log(gimme([-2, -3.2, -1])); //  0
console.log(gimme([5.2, -10.6, 14])); //  0