const myVal= process.argv
let myArr=[]
myArr.push(Number(myVal[2]))

myArr.push(Number(myVal[3]))
console.log(myArr)

let sum = Number(myArr[0])+  Number(myArr[1])
    console.log(`The sum of two numbers is : ${sum}`)

    ;