/*
Excercise 3
https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
*/

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    let aCounter=0
    let bCounter=0
    a.forEach((element,index) => {
        if (element>b[index]) {
            aCounter++
        }else if (element<b[index]) {
            bCounter++
        }
    })
    return [aCounter,bCounter]
}

console.log(compareTriplets([10, 20, 30],[300, 2, 1]))