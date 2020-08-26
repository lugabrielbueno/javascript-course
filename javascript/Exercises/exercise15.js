let a = [7,5,58,94,0,6]

function sumlis(arg) {
    var answer = 0
    for (let num in arg) {
        answer += arg[num]
    }
    console.log(answer)
}
sumlis(a)