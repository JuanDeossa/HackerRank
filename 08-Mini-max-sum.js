/*
Excercise 8
https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
*/

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let sortedArr = arr.sort((i,j)=>i-j)
    let Sum = sortedArr.reduce((i,j)=>i+j)
    let minSum= Sum - sortedArr[sortedArr.length-1]
    let maxSum= Sum - sortedArr[0]
    console.log(minSum+" "+maxSum)
}

console.log(miniMaxSum([1,3,5,7,9]))



