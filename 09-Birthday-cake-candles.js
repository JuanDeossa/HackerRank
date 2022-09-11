/*
Excercise 9
https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
*/

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    let candlesSorted
    candlesSorted = candles.sort((i,j)=>i-j)
    candlesSorted
    return candlesSorted.filter((i,j)=>i===candlesSorted[candlesSorted.length-1]).length
}

console.log(birthdayCakeCandles([4,4,1,3]))



