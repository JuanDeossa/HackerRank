/*
Excercise 4
https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
*/

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    let ar2
    return ar2 = ar.reduce((a,b)=>a+b)
}

console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]))
