let num = [1,2,3,5,6]
console.log(num)
for (var c= 0;c <= 10; c++) {
   num.push(c) 
   
}
console.log(num)
console.log(num.sort())
/*
for (let pos=0; pos<=num.length;pos++) {
    console.log(num[pos])
}*/

for (let pos in num) {
    console.log(num[pos])
}
