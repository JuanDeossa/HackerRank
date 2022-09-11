/*
Excercise 6
https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
*/

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let pN = 0
    let nN = 0
    arr.forEach(element => {
        if (element>0) {
            pN++
        }else if (element<0) {
            nN++
        }
    })
    console.log(parseFloat(pN/arr.length).toFixed(6))
    console.log(parseFloat(nN/arr.length).toFixed(6))
    console.log(parseFloat((arr.length-pN-nN)/arr.length).toFixed(6))
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
