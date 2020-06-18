/* calculate average note */

var n1 = 9
var n2 = 9
var n3 = 10
var result = parseFloat((n1+n2+n3)/3).toFixed(1)

if (result >= 9) {
    var sit = 'HELPER'
    console.log(`Note:${result}\nCongratulations`)
}else if (result >= 6) {
    console.log(`Note:${result}\nCongratulations`)
}else if (result < 6) {
    var sit = 'HELP'
    console.log(`Note:${result}\nSorry, you will need help`)
}

switch(sit) {
    case 'HELPER':
        console.log('Your friend will need you, help him')
        break
    case 'HELP':
        console.log('Your friend will help you, relax')
        break
}