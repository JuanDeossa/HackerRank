/*
Excercise 11
https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true
*/

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    let b = a.reduce((obj,i)=>{
        if (!obj[i]) {
            obj[i]=1
        }else{
            obj[i]++
        }
        return obj
    },{})
    let max = 0
    for (const key in b) {
        const value = b[key] ; const beforeKey = Number(key)-1 ; const afterKey = Number(key)+1 ; const beforeValue = b[beforeKey] ; const afterValue = b[afterKey]
        if (beforeValue && value+beforeValue>max) {
            max = value + beforeValue
        }else if (value>max) {
            max = value 
        }
        if (afterValue && value+afterValue>max) {
            max = value + afterValue
        }
    }
    return max                                      
}

console.log(pickingNumbers([4,6,5,3,3,1,8,9,9,13,13,21,16,18,20,23,24,25,100,100,100,100,1,1,1,1]));






