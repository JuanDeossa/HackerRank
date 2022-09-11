/*
Excercise 10
https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
*/

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let data =[
        ["01","13"],
        ["02","14"],
        ["03","15"],
        ["04","16"],
        ["05","17"],
        ["06","18"],
        ["07","19"],
        ["08","20"],
        ["09","21"],
        ["10","22"],
        ["11","23"]
    ]
    let output = ""
    if (s.includes("AM")) {
        s = s.replace("AM","");
        (s[0]==="1"&& s[1]==="2")?(s=s.replace((s[0]+s[1]),"00")):""
    }
    else{
        s = s.replace("PM","")
        data.forEach((i)=>{
            i.forEach((k,m)=>{
                (k===s[0]+s[1])?(s=s.replace((s[0]+s[1]),i[1])):""
            })
        })
    }
    return s
}

console.log(timeConversion("08:05:45PM"))

