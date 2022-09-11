/*
Excercise 7
https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
*/

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    let str = ""
    let spN = n-1
    let chN = 1

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < spN; j++) {
            str+=" "
        }
        for (let k = 0; k < chN; k++) {
            str+="#"
        }
        console.log(str);
        chN++
        spN--
        str=""
    }
}
console.log(staircase(10))
