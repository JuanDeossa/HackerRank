/*
Excercise 2
https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true
*/

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    return ar.reduce((i,j)=>i+j)
}

console.log(simpleArraySum([1,2,3,4,5]));
