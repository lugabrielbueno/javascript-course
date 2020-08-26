//if a number is divible by 3 print fizz if is divisible by 5 print buzz if divisible by 5 and 3 fizzbuzz

for (let num=0;num<=1000;num++) {
    if (num %5==0 && num %3 ==0) {
        console.log('FizzBuzz')
    }else if  (num%3 ==0) {
        console.log('Fizz')
    }else if (num%5 ==0) {
        console.log('Buzz')
    }else {
        console.log(num)
    }
}