/*
Excercise 2
https://www.hackerrank.com/challenges/find-the-median/problem?h_r=next-challenge&h_v=zen
*/

/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
    let ascendantSorteArr=arr.sort((a,b)=>{
        return a-b
    })
    return ascendantSorteArr[Math.ceil(ascendantSorteArr.length/2-1)]
}

console.log(findMedian([3,2,5,6,11]));
