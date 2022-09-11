/*
Excercise 5
https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
*/

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let sumD1 = 0
    let sumD2 = 0
    let arr2 = [...arr]
    arr2 = arr2.reverse()
    arr.forEach((row,rowIndex) => {
        row.forEach((item,colIndex) => {
            (rowIndex===colIndex)?sumD1+=item:undefined
        })
    })
    arr2.forEach((row,rowIndex) => {
        row.forEach((item,colIndex) => {
            (rowIndex===colIndex)?sumD2+=item:undefined
        })
    })
    return Math.abs(sumD2-sumD1)
}

console.log(diagonalDifference(
    [
    [1,2,3],
    [4,5,6],
    [9,8,9]  
    ]
))